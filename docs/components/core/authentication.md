---
title: Authentication
sidebar_position: 1
---
# Authentication System

Koodisi provides a comprehensive, secure, and flexible authentication system that supports multiple authentication methods, role-based access control, and advanced security features.

## 🔐 Overview

The authentication system is built around these core principles:

* **Security First**: Industry-standard encryption and best practices
* **Flexibility**: Multiple authentication providers and methods
* **Scalability**: Designed to handle millions of users
* **Developer Friendly**: Easy to integrate and customize

## 🚀 Quick Setup

### Basic Configuration

```javascript
// config/auth.js
module.exports = {
  // Authentication providers
  providers: {
    local: {
      enabled: true,
      requireEmailVerification: true,
      passwordPolicy: {
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true
      }
    },
    oauth: {
      github: {
        enabled: true,
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        scope: ['user:email']
      },
      google: {
        enabled: true,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        scope: ['profile', 'email']
      }
    },
    saml: {
      enabled: false,
      // SAML configuration for enterprise SSO
    }
  },
  
  // JWT configuration
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d',
    refreshExpiresIn: '30d',
    algorithm: 'HS256'
  },
  
  // Session configuration
  session: {
    store: 'redis', // 'memory', 'redis', 'database'
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true
  }
};
```

### Environment Variables

```bash
# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_REFRESH_SECRET=your-refresh-token-secret

# OAuth Providers
GITHUB_CLIENT_ID=your-github-oauth-client-id
GITHUB_CLIENT_SECRET=your-github-oauth-client-secret
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret

# Email Configuration (for verification)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🔑 Authentication Methods

### 1. Local Authentication

Traditional email/password authentication with enhanced security:

```javascript
// User registration
const registerUser = async (userData) => {
  const { email, password, firstName, lastName } = userData;
  
  // Validate password strength
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    throw new Error(passwordValidation.errors);
  }
  
  // Hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 12);
  
  // Create user
  const user = await User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    emailVerified: false
  });
  
  // Send verification email
  await sendVerificationEmail(user);
  
  return user;
};

// User login
const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Invalid credentials');
  }
  
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error('Invalid credentials');
  }
  
  if (!user.emailVerified) {
    throw new Error('Please verify your email first');
  }
  
  // Generate tokens
  const tokens = generateTokens(user);
  
  return { user, tokens };
};
```

### 2. OAuth Authentication

Support for popular OAuth providers:

```javascript
// GitHub OAuth flow
const githubAuth = async (code) => {
  // Exchange code for access token
  const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code
  });
  
  const accessToken = new URLSearchParams(tokenResponse.data).get('access_token');
  
  // Get user information
  const userResponse = await axios.get('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  
  const { id, login, email, name, avatar_url } = userResponse.data;
  
  // Find or create user
  let user = await User.findOne({ where: { githubId: id } });
  
  if (!user) {
    user = await User.create({
      githubId: id,
      email,
      username: login,
      name,
      avatar: avatar_url,
      emailVerified: true,
      provider: 'github'
    });
  }
  
  return generateTokens(user);
};
```

### 3. SAML Authentication

Enterprise SSO support:

```javascript
// SAML configuration
const samlConfig = {
  entryPoint: process.env.SAML_ENTRY_POINT,
  issuer: process.env.SAML_ISSUER,
  cert: process.env.SAML_CERT,
  privateKey: process.env.SAML_PRIVATE_KEY,
  callbackUrl: process.env.SAML_CALLBACK_URL
};

// SAML authentication
const samlAuth = async (samlResponse) => {
  const profile = await saml.validatePostResponse(samlResponse);
  
  const { email, firstName, lastName, nameID } = profile;
  
  let user = await User.findOne({ where: { samlId: nameID } });
  
  if (!user) {
    user = await User.create({
      samlId: nameID,
      email,
      firstName,
      lastName,
      emailVerified: true,
      provider: 'saml'
    });
  }
  
  return generateTokens(user);
};
```

## 🛡️ Security Features

### Password Security

```javascript
// Password validation
const validatePassword = (password) => {
  const errors = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Rate limiting for login attempts
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many login attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});
```

### Token Management

```javascript
// JWT token generation
const generateTokens = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    permissions: user.permissions
  };
  
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m',
    issuer: 'koodisi',
    audience: 'koodisi-users'
  });
  
  const refreshToken = jwt.sign(
    { id: user.id, type: 'refresh' },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '30d' }
  );
  
  return { accessToken, refreshToken };
};

// Token refresh
const refreshToken = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    
    if (decoded.type !== 'refresh') {
      throw new Error('Invalid refresh token');
    }
    
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new Error('User not found');
    }
    
    return generateTokens(user);
  } catch (error) {
    throw new Error('Invalid refresh token');
  }
};
```

## 👥 Role-Based Access Control (RBAC)

### Role Definition

```javascript
// models/Role.js
const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  permissions: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
  hierarchy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

// Default roles
const defaultRoles = [
  {
    name: 'admin',
    description: 'Full system access',
    permissions: ['*'],
    hierarchy: 100
  },
  {
    name: 'moderator',
    description: 'Content moderation access',
    permissions: [
      'users:read',
      'users:update',
      'content:read',
      'content:create',
      'content:update',
      'content:delete'
    ],
    hierarchy: 50
  },
  {
    name: 'user',
    description: 'Standard user access',
    permissions: [
      'profile:read',
      'profile:update',
      'content:read',
      'content:create'
    ],
    hierarchy: 10
  }
];
```

### Permission Middleware

```javascript
// middleware/permissions.js
const checkPermission = (permission) => {
  return (req, res, next) => {
    const user = req.user;
    
    if (!user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    // Check if user has wildcard permission
    if (user.permissions.includes('*')) {
      return next();
    }
    
    // Check specific permission
    if (user.permissions.includes(permission)) {
      return next();
    }
    
    // Check role hierarchy
    const userRole = user.Role;
    if (userRole && userRole.hierarchy >= 50) {
      return next();
    }
    
    res.status(403).json({ error: 'Insufficient permissions' });
  };
};

// Usage in routes
router.get('/admin/users', 
  authenticate, 
  checkPermission('users:read'), 
  userController.getAllUsers
);
```

## 📱 Multi-Factor Authentication (MFA)

### TOTP Setup

```javascript
// TOTP (Time-based One-Time Password) setup
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

const setupMFA = async (userId) => {
  const secret = speakeasy.generateSecret({
    name: `Koodisi (${userId})`,
    issuer: 'Koodisi',
    length: 32
  });
  
  // Save secret to user
  await User.update(
    { mfaSecret: secret.base32 },
    { where: { id: userId } }
  );
  
  // Generate QR code
  const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);
  
  return {
    secret: secret.base32,
    qrCode: qrCodeUrl,
    backupCodes: generateBackupCodes()
  };
};

// Verify TOTP token
const verifyMFA = (userId, token) => {
  const user = User.findById(userId);
  
  const verified = speakeasy.totp.verify({
    secret: user.mfaSecret,
    encoding: 'base32',
    token,
    window: 2 // Allow 2 time steps before and after
  });
  
  return verified;
};
```

## 🔄 Session Management

### Redis Session Store

```javascript
// Session configuration with Redis
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

const sessionConfig = {
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
};

app.use(session(sessionConfig));
```

### Session Monitoring

```javascript
// Active session tracking
const trackActiveSessions = async (userId, sessionId) => {
  // Store session info
  await redisClient.setex(
    `session:${sessionId}`,
    24 * 60 * 60, // 24 hours
    JSON.stringify({
      userId,
      loginTime: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get('User-Agent')
    })
  );
  
  // Add to user's active sessions
  await redisClient.sadd(`user_sessions:${userId}`, sessionId);
};

// Get user sessions
const getUserSessions = async (userId) => {
  const sessionIds = await redisClient.smembers(`user_sessions:${userId}`);
  const sessions = await Promise.all(
    sessionIds.map(async (sessionId) => {
      const sessionData = await redisClient.get(`session:${sessionId}`);
      return sessionData ? JSON.parse(sessionData) : null;
    })
  );
  
  return sessions.filter(Boolean);
};

// Revoke session
const revokeSession = async (sessionId) => {
  const sessionData = await redisClient.get(`session:${sessionId}`);
  if (sessionData) {
    const { userId } = JSON.parse(sessionData);
    await redisClient.del(`session:${sessionId}`);
    await redisClient.srem(`user_sessions:${userId}`, sessionId);
  }
};
```

## 🧪 Testing Authentication

### Unit Tests

```javascript
// tests/auth.test.js
describe('Authentication', () => {
  test('should register user with valid data', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'ValidPass123!',
      firstName: 'John',
      lastName: 'Doe'
    };
    
    const user = await authService.registerUser(userData);
    
    expect(user.email).toBe(userData.email);
    expect(user.emailVerified).toBe(false);
    expect(user.password).not.toBe(userData.password); // Should be hashed
  });
  
  test('should login with valid credentials', async () => {
    const result = await authService.loginUser(
      'test@example.com',
      'ValidPass123!'
    );
    
    expect(result.user).toBeDefined();
    expect(result.tokens.accessToken).toBeDefined();
    expect(result.tokens.refreshToken).toBeDefined();
  });
  
  test('should reject invalid credentials', async () => {
    await expect(
      authService.loginUser('test@example.com', 'wrongpassword')
    ).rejects.toThrow('Invalid credentials');
  });
});
```

### Integration Tests

```javascript
// tests/auth.integration.test.js
describe('Authentication API', () => {
  test('POST /api/auth/register', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        password: 'ValidPass123!',
        firstName: 'John',
        lastName: 'Doe'
      });
    
    expect(response.status).toBe(201);
    expect(response.body.user.email).toBe('test@example.com');
  });
  
  test('POST /api/auth/login', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'ValidPass123!'
      });
    
    expect(response.status).toBe(200);
    expect(response.body.tokens.accessToken).toBeDefined();
  });
});
```

## 📊 Monitoring & Analytics

### Authentication Metrics

```javascript
// Track authentication events
const trackAuthEvent = (event, userId, metadata = {}) => {
  analytics.track(event, {
    userId,
    timestamp: new Date().toISOString(),
    ip: metadata.ip,
    userAgent: metadata.userAgent,
    provider: metadata.provider,
    success: metadata.success
  });
};

// Usage in authentication flows
const loginHandler = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body.email, req.body.password);
    
    trackAuthEvent('user_login', result.user.id, {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      provider: 'local',
      success: true
    });
    
    res.json(result);
  } catch (error) {
    trackAuthEvent('login_failed', null, {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      provider: 'local',
      success: false,
      error: error.message
    });
    
    res.status(401).json({ error: error.message });
  }
};
```

## 🔧 Advanced Configuration

### Custom Authentication Provider

```javascript
// Custom provider implementation
class CustomAuthProvider {
  constructor(config) {
    this.config = config;
  }
  
  async authenticate(credentials) {
    // Implement custom authentication logic
    const response = await axios.post(this.config.endpoint, {
      username: credentials.username,
      password: credentials.password
    });
    
    if (response.data.success) {
      return this.mapUserData(response.data.user);
    }
    
    throw new Error('Authentication failed');
  }
  
  mapUserData(userData) {
    return {
      id: userData.id,
      email: userData.email,
      name: userData.displayName,
      provider: 'custom'
    };
  }
}

// Register custom provider
authManager.registerProvider('custom', new CustomAuthProvider({
  endpoint: process.env.CUSTOM_AUTH_ENDPOINT
}));
```

- - -

## 📚 Next Steps

* **[Authorization](./authorization)** - Learn about advanced authorization patterns
* **[Security Best Practices](../security)** - Security guidelines and recommendations
* **[API Reference](../../api/authentication)** - Complete API documentation
* **[Troubleshooting](../troubleshooting)** - Common issues and solutions

> **🔐 Security Tip**: Always use HTTPS in production and keep your JWT secrets secure. Regularly rotate secrets and monitor for suspicious activity.
