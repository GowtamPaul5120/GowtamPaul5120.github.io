---
title: Installation
sidebar_position: 2
---

# Installation Guide

This guide will walk you through installing and setting up PlatformNX on your system. PlatformNX supports multiple installation methods to accommodate different development workflows and environments.

## 📋 Prerequisites

Before you begin, ensure your system meets the following requirements:

### System Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: Version 2.20 or higher
- **Memory**: Minimum 4GB RAM (8GB recommended)
- **Storage**: At least 2GB free disk space

### Development Tools (Recommended)
- **VS Code**: Latest version with PlatformNX extension
- **Docker**: Version 20.10 or higher (for containerized development)
- **PostgreSQL**: Version 13 or higher (for local database)

## 🚀 Installation Methods

### Method 1: Global Installation (Recommended)

Install PlatformNX globally on your system for easy access across projects:

```bash
# Install PlatformNX CLI globally
npm install -g @platformnx/cli

# Verify installation
platformnx --version
```

### Method 2: Project-Specific Installation

Install PlatformNX in a specific project directory:

```bash
# Create a new project directory
mkdir my-platformnx-app
cd my-platformnx-app

# Initialize a new PlatformNX project
npm init -y
npm install @platformnx/core @platformnx/cli

# Initialize the project
npx platformnx init
```

### Method 3: Using Docker

Run PlatformNX in a Docker container:

```bash
# Pull the official PlatformNX Docker image
docker pull platformnx/latest

# Run PlatformNX in a container
docker run -it -p 3000:3000 -v $(pwd):/app platformnx/latest
```

### Method 4: Clone from Repository

For development or contribution purposes:

```bash
# Clone the repository
git clone https://github.com/platformnx/platformnx.git
cd platformnx

# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev
```

## ⚙️ Configuration

After installation, you'll need to configure PlatformNX for your specific needs.

### Basic Configuration

Create a configuration file in your project root:

```bash
# Generate default configuration
npx platformnx config init
```

This creates a `platformnx.config.js` file:

```javascript
module.exports = {
  // Project configuration
  name: 'my-platformnx-app',
  version: '1.0.0',
  
  // Server configuration
  server: {
    port: 3000,
    host: 'localhost',
    https: false
  },
  
  // Database configuration
  database: {
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    database: 'platformnx_db',
    username: 'postgres',
    password: 'password'
  },
  
  // Authentication configuration
  auth: {
    providers: ['local', 'github', 'google'],
    jwtSecret: 'your-secret-key-here'
  },
  
  // Development configuration
  development: {
    hotReload: true,
    debug: true,
    logs: 'verbose'
  }
};
```

### Environment Variables

Create a `.env` file for environment-specific configuration:

```bash
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/platformnx_db
REDIS_URL=redis://localhost:6379

# Authentication
JWT_SECRET=your-super-secret-jwt-key
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Application Configuration
NODE_ENV=development
PORT=3000
API_BASE_URL=http://localhost:3000/api

# External Services
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Monitoring
SENTRY_DSN=your-sentry-dsn
ANALYTICS_ID=your-analytics-id
```

## 🗄️ Database Setup

PlatformNX requires a database for persistent storage. Here's how to set it up:

### PostgreSQL Setup

1. **Install PostgreSQL**:
   ```bash
   # macOS
   brew install postgresql
   
   # Ubuntu/Debian
   sudo apt-get install postgresql postgresql-contrib
   
   # Windows
   # Download from https://www.postgresql.org/download/windows/
   ```

2. **Create Database**:
   ```sql
   -- Connect to PostgreSQL
   psql -U postgres
   
   -- Create database
   CREATE DATABASE platformnx_db;
   
   -- Create user
   CREATE USER platformnx_user WITH PASSWORD 'your_password';
   
   -- Grant privileges
   GRANT ALL PRIVILEGES ON DATABASE platformnx_db TO platformnx_user;
   ```

3. **Run Migrations**:
   ```bash
   # Run database migrations
   npx platformnx migrate
   
   # Seed initial data
   npx platformnx seed
   ```

### Redis Setup (Optional, for caching)

1. **Install Redis**:
   ```bash
   # macOS
   brew install redis
   
   # Ubuntu/Debian
   sudo apt-get install redis-server
   
   # Start Redis
   redis-server
   ```

## 🧪 Verification

After installation, verify that everything is working correctly:

### 1. Check CLI Installation
```bash
# Check PlatformNX version
platformnx --version

# List available commands
platformnx --help

# Check system status
platformnx doctor
```

### 2. Start Development Server
```bash
# Start the development server
npm run dev

# Or using PlatformNX CLI
platformnx dev
```

### 3. Access the Application
Open your browser and navigate to:
- **Application**: http://localhost:3000
- **API Documentation**: http://localhost:3000/api/docs
- **Admin Panel**: http://localhost:3000/admin

### 4. Run Health Check
```bash
# Check system health
curl http://localhost:3000/api/health

# Expected response
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "1.0.0",
  "services": {
    "database": "connected",
    "redis": "connected",
    "external_apis": "available"
  }
}
```

## 🔧 Common Issues & Solutions

### Issue: Permission Denied
```bash
# Fix: Use npx or install with correct permissions
npx platformnx [command]
# or
sudo npm install -g @platformnx/cli
```

### Issue: Port Already in Use
```bash
# Check what's using the port
lsof -i :3000

# Kill the process
kill -9 [PID]

# Or use a different port
platformnx dev --port 3001
```

### Issue: Database Connection Failed
```bash
# Check PostgreSQL status
pg_ctl status

# Start PostgreSQL
brew services start postgresql  # macOS
sudo systemctl start postgresql  # Linux

# Check connection
psql -h localhost -U platformnx_user -d platformnx_db
```

### Issue: Node.js Version Incompatible
```bash
# Check Node.js version
node --version

# Update Node.js using nvm
nvm install 18
nvm use 18
nvm alias default 18
```

## 📚 Next Steps

Congratulations! You've successfully installed PlatformNX. Here's what to do next:

1. **[Quick Start Guide](./quick-start)** - Build your first application
2. **[Core Components](../components/core/authentication)** - Explore key features
3. **[Development Workflow](../advanced/development/environment-setup)** - Set up your development environment
4. **[API Reference](../api/overview)** - Learn about available APIs

## 🆘 Getting Help

If you encounter any issues during installation:

- **Documentation**: Check our comprehensive guides
- **Community**: Join our Discord server or GitHub Discussions
- **Issues**: Report bugs on GitHub Issues
- **Support**: Contact our support team at support@platformnx.com

---

> **💡 Pro Tip**: Keep your PlatformNX installation updated by running `npm update @platformnx/cli` regularly to get the latest features and security patches.
