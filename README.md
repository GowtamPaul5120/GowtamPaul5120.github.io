# PlatformNX Documentation

A modern, comprehensive documentation website built with Docusaurus v3, featuring AI-powered search, collaborative editing workflows, and responsive design.

## 🚀 Features

### 🤖 AI-Powered Search

- Natural language processing for intelligent search results
- Real-time search with debouncing
- Context-aware ranking and relevance scoring
- Support for keyword and phrase searches

### 📝 Collaborative Editing

- GitHub-powered editing workflow
- "Edit this page" button with direct GitHub integration
- Pull request-based content management
- Automated review and merge processes

### 🎨 Modern UI/UX

- Dark/light mode support with smooth transitions
- Accordion-style sidebar with nested navigation
- Responsive design for all devices
- Custom animations and micro-interactions

### 🛠️ Developer Experience

- TypeScript for type safety
- Hot reloading in development
- Optimized build pipeline
- Comprehensive tooling setup

### 🔒 Security & Authentication

- Optional GitHub OAuth integration
- Secure authentication flows
- Role-based access control
- Session management

## 📁 Project Structure

```
platformnx-docs/
├── docs/                          # Documentation content
│   ├── getting-started/          # Getting started guides
│   ├── components/               # Component documentation
│   ├── features/                 # Feature documentation
│   ├── advanced/                 # Advanced topics
│   └── api/                      # API reference
├── src/                          # Source files
│   ├── css/                      # Custom styles
│   ├── theme/                    # Custom theme components
│   │   ├── SearchBar/           # Custom search component
│   │   ├── EditThisPage/        # Edit page component
│   │   ├── AuthModal/           # Authentication modal
│   │   └── AuthModalProvider/   # Auth context provider
│   └── pages/                   # Custom pages
├── search-api/                   # Search API server
├── .github/                      # GitHub workflows
│   └── workflows/               # CI/CD pipelines
├── static/                       # Static assets
├── docusaurus.config.ts          # Docusaurus configuration
├── sidebars.ts                   # Sidebar configuration
└── package.json                  # Dependencies and scripts
```

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Docusaurus v3
- **Styling**: CSS custom properties, responsive design
- **Search**: Node.js/Express API with intelligent ranking
- **Deployment**: GitHub Pages with GitHub Actions
- **Version Control**: Git with automated workflows

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/platformnx-docs.git
   cd platformnx-docs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   # Start documentation site
   npm start

   # Start with search API (in separate terminal)
   npm run start:search
   ```

4. **Open your browser**
   - Documentation: http://localhost:3000
   - Search API: http://localhost:3001

### Development Scripts

```bash
# Development
npm start                    # Start development server
npm run start:search         # Start with search API
npm run dev                 # Alias for npm start

# Building
npm run build               # Build for production
npm run serve               # Serve built site locally

# Search API
npm run search:dev          # Start search API only

# Maintenance
npm run clear               # Clear cache and build files
npm run typecheck           # Run TypeScript checks
```

## 🔧 Configuration

### Docusaurus Configuration

The main configuration is in `docusaurus.config.ts`:

```typescript
const config = {
  title: "PlatformNX Documentation",
  tagline: "Complete platform documentation with AI-powered search",
  url: "https://your-username.github.io/platformnx-docs",
  baseUrl: "/",

  // GitHub integration
  organizationName: "your-username",
  projectName: "platformnx-docs",

  // Custom fields
  customFields: {
    searchEndpoint: "http://localhost:3001/api/search",
  },

  // Theme configuration
  themeConfig: {
    // Navbar, footer, and other UI settings
  },
};
```

### Search API Configuration

The search API is configured in `search-api/server.js`:

```javascript
// Configuration options
const PORT = process.env.SEARCH_API_PORT || 3001;

// Document indexing and search logic
// Supports natural language processing
```

### Sidebar Configuration

Sidebar structure is defined in `sidebars.ts`:

```typescript
const sidebars = {
  platformSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: false,
      items: [
        "getting-started/what-is-platformnx",
        "getting-started/installation",
        "getting-started/quick-start",
      ],
    },
    // ... more categories
  ],
};
```

## 📝 Content Management

### Adding New Documentation

1. **Create markdown files** in the `docs/` directory
2. **Add frontmatter** with metadata:

   ```yaml
   ---
   title: Your Page Title
   sidebar_position: 1
   ---
   ```

3. **Update sidebar** in `sidebars.ts` if needed

### Editing Workflow

1. **Click "Edit this page"** on any documentation page
2. **Authenticate with GitHub** (optional modal)
3. **Make changes** in GitHub editor
4. **Create pull request** for review
5. **Automatic deployment** on merge to main

### Search Integration

The search system automatically:

- Indexes all markdown files
- Updates on file changes
- Provides intelligent ranking
- Supports natural language queries

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Configure repository settings**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, / (root)

2. **Set up GitHub Actions**:
   - CI/CD pipeline is pre-configured in `.github/workflows/ci-cd.yml`
   - Automatically builds and deploys on push to main

3. **Configure secrets**:

   ```bash
   # Required for deployment
   GITHUB_TOKEN: <auto-generated>

   # Optional for notifications
   SLACK_WEBHOOK_URL: <your-slack-webhook>
   NETLIFY_AUTH_TOKEN: <your-netlify-token>
   NETLIFY_SITE_ID: <your-netlify-site-id>
   ```

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy to GitHub Pages
npm run deploy

# Or deploy manually
gh-pages -d build
```

## 🔍 Search Features

### AI-Powered Search

The search system includes:

- **Natural Language Processing**: Understands conversational queries
- **Intelligent Ranking**: Results ranked by relevance and context
- **Real-time Search**: Instant results with debouncing
- **Content Indexing**: Automatic indexing of all documentation

### Search API Endpoints

```bash
# Search documentation
GET /api/search?q=your+query

# Health check
GET /api/health

# Rebuild index
POST /api/reindex
```

### Customizing Search

The search algorithm can be customized in `search-api/server.js`:

```javascript
// Modify search ranking algorithm
function searchDocuments(query) {
  // Custom ranking logic
  // Add weight for title matches
  // Consider content relevance
  // Implement fuzzy matching
}
```

## 🎨 Customization

### Theming

The site uses custom CSS variables defined in `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #2563eb;
  --platformnx-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --platformnx-sidebar-bg: #f8fafc;
  --platformnx-sidebar-border: #e2e8f0;
}
```

### Custom Components

Custom theme components are in `src/theme/`:

- **SearchBar**: AI-powered search interface
- **EditThisPage**: GitHub editing integration
- **AuthModal**: Authentication modal
- **AuthModalProvider**: Authentication context

### Adding New Components

1. **Create component** in `src/theme/YourComponent/`
2. **Export as default** from `index.tsx`
3. **Add styles** in `styles.css`
4. **Use in layouts** or pages

## 🧪 Testing

### Running Tests

```bash
# Type checking
npm run typecheck

# Linting (when configured)
npm run lint

# Build verification
npm run build
```

### Testing Search API

```bash
# Start search API
npm run search:dev

# Test search endpoint
curl "http://localhost:3001/api/search?q=installation"

# Test health check
curl "http://localhost:3001/api/health"
```

## 🔧 Troubleshooting

### Common Issues

1. **Search not working**:
   - Ensure search API is running on port 3001
   - Check CORS configuration
   - Verify search endpoint in docusaurus.config.ts

2. **Build failures**:
   - Clear cache: `npm run clear`
   - Check TypeScript errors: `npm run typecheck`
   - Verify all dependencies are installed

3. **Deployment issues**:
   - Check GitHub Actions logs
   - Verify repository settings
   - Ensure GITHUB_TOKEN has proper permissions

### Getting Help

- **Documentation**: Browse the site for detailed guides
- **Issues**: Report bugs on GitHub Issues
- **Discussions**: Ask questions in GitHub Discussions
- **Community**: Join our Discord server

## 📊 Analytics & Monitoring

### Built-in Analytics

The site includes:

- **Search analytics**: Track search queries and results
- **User engagement**: Page views and time on page
- **Performance monitoring**: Core Web Vitals tracking

### Custom Analytics

Add your analytics in `docusaurus.config.ts`:

```typescript
const config = {
  themeConfig: {
    // Google Analytics
    gtag: {
      trackingID: "GA_MEASUREMENT_ID",
      anonymizeIP: true,
    },

    // Other analytics providers
  },
};
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Workflow

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/your-feature`
3. **Make changes** and test thoroughly
4. **Commit changes**: `git commit -m "Add your feature"`
5. **Push to fork**: `git push origin feature/your-feature`
6. **Create pull request**

### Contribution Guidelines

- **Code style**: Follow TypeScript and React best practices
- **Documentation**: Update relevant documentation
- **Testing**: Ensure all tests pass
- **Accessibility**: Follow WCAG guidelines

### Areas for Contribution

- **Content**: Improve documentation and add examples
- **Features**: Enhance search algorithm and UI components
- **Performance**: Optimize build size and loading times
- **Accessibility**: Improve keyboard navigation and screen reader support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Docusaurus Team**: For the excellent documentation framework
- **React Community**: For the amazing ecosystem
- **GitHub**: For hosting and CI/CD
- **Contributors**: Everyone who has helped improve this project

## 📞 Contact

- **Issues**: [GitHub Issues](https://github.com/your-username/platformnx-docs/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/platformnx-docs/discussions)
- **Email**: support@platformnx.com

---

## 🎯 Quick Links

- **[Live Demo](https://your-username.github.io/platformnx-docs)** - View the deployed site
- **[Documentation](./docs/intro.md)** - Start reading the docs
- **[API Reference](./docs/api/overview.md)** - Explore the API
- **[Contributing Guide](./CONTRIBUTING.md)** - Learn how to contribute

> **💡 Pro Tip**: Use the search bar at the top of any page to quickly find what you're looking for. Our AI-powered search understands natural language queries and provides intelligent, context-aware results!
