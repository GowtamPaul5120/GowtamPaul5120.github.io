const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.SEARCH_API_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple in-memory document storage (in production, use a proper database)
let documents = [];

// Load documents from the docs directory
async function loadDocuments() {
  const docsPath = path.join(__dirname, '../docs');
  
  async function scanDirectory(dir, basePath = '') {
    const items = await fs.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.join(basePath, item.name);
      
      if (item.isDirectory()) {
        await scanDirectory(fullPath, relativePath);
      } else if (item.name.endsWith('.md')) {
        try {
          const content = await fs.readFile(fullPath, 'utf8');
          const title = extractTitle(content) || item.name.replace('.md', '');
          const cleanContent = cleanMarkdown(content);
          
          documents.push({
            id: relativePath,
            title,
            content: cleanContent,
            url: `/docs/${relativePath.replace('.md', '')}`,
            path: relativePath
          });
        } catch (error) {
          console.error(`Error reading ${fullPath}:`, error);
        }
      }
    }
  }
  
  await scanDirectory(docsPath);
  console.log(`Loaded ${documents.length} documents`);
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : null;
}

function cleanMarkdown(content) {
  return content
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/\n\s*\n/g, ' ') // Replace multiple newlines with space
    .trim();
}

// Simple keyword-based search (in production, use embeddings + vector search)
function searchDocuments(query) {
  const queryTerms = query.toLowerCase().split(/\s+/);
  
  const results = documents.map(doc => {
    const titleLower = doc.title.toLowerCase();
    const contentLower = doc.content.toLowerCase();
    
    let score = 0;
    
    // Title matches are worth more
    queryTerms.forEach(term => {
      if (titleLower.includes(term)) {
        score += 10;
      }
      if (contentLower.includes(term)) {
        score += 1;
      }
    });
    
    // Boost exact phrase matches
    if (contentLower.includes(query.toLowerCase()) || titleLower.includes(query.toLowerCase())) {
      score += 20;
    }
    
    return {
      ...doc,
      score
    };
  })
  .filter(doc => doc.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 10); // Limit to top 10 results
  
  return results;
}

// Search endpoint
app.get('/api/search', async (req, res) => {
  const { q: query } = req.query;
  
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }
  
  try {
    const results = searchDocuments(query);
    res.json({ results });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', documents: documents.length });
});

// Rebuild index endpoint
app.post('/api/reindex', async (req, res) => {
  try {
    documents = [];
    await loadDocuments();
    res.json({ message: 'Index rebuilt successfully', documents: documents.length });
  } catch (error) {
    console.error('Reindex error:', error);
    res.status(500).json({ error: 'Failed to rebuild index' });
  }
});

// Initialize
async function initialize() {
  try {
    await loadDocuments();
    app.listen(PORT, () => {
      console.log(`Search API server running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/api/health`);
      console.log(`Search endpoint: http://localhost:${PORT}/api/search?q=test`);
    });
  } catch (error) {
    console.error('Failed to initialize:', error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  process.exit(0);
});

initialize();
