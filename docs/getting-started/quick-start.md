---
title: Quick Start
sidebar_position: 3
---

# Quick Start Guide

Get up and running with PlatformNX in minutes! This guide will walk you through creating your first PlatformNX application and exploring its core features.

## 🎯 What We'll Build

In this quick start, you'll create a simple task management application with:
- User authentication
- CRUD operations for tasks
- Real-time updates
- Responsive UI
- API integration

## ⚡ 5-Minute Setup

### Step 1: Create Your Project

```bash
# Create a new PlatformNX application
npx create-platformnx-app my-task-app

# Navigate to your project
cd my-task-app

# Install dependencies
npm install
```

### Step 2: Start Development Server

```bash
# Start the development server
npm run dev

# Your app is now running at http://localhost:3000
```

That's it! You now have a fully functional PlatformNX application running. Let's explore what you get out of the box.

## 🏗️ Project Structure

Understanding your project structure is key to effective development:

```
my-task-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/        # Shared components
│   │   ├── forms/         # Form components
│   │   └── layout/        # Layout components
│   ├── pages/             # Page components
│   │   ├── auth/          # Authentication pages
│   │   ├── dashboard/     # Dashboard pages
│   │   └── tasks/         # Task-related pages
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   ├── utils/             # Utility functions
│   ├── styles/            # Global styles
│   └── types/             # TypeScript type definitions
├── api/                   # Backend API routes
│   ├── auth/              # Authentication endpoints
│   ├── tasks/             # Task endpoints
│   └── users/             # User endpoints
├── config/                # Configuration files
├── migrations/            # Database migrations
├── tests/                 # Test files
├── docs/                  # Documentation
└── public/                # Static assets
```

## 🔐 Authentication Setup

PlatformNX comes with built-in authentication. Let's set it up:

### 1. Configure Authentication Providers

Edit `config/auth.js`:

```javascript
module.exports = {
  providers: {
    local: {
      enabled: true,
      requireEmailVerification: false
    },
    github: {
      enabled: true,
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    },
    google: {
      enabled: true,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: '7d'
  }
};
```

### 2. Add Environment Variables

Create `.env.local`:

```bash
JWT_SECRET=your-super-secret-jwt-key
GITHUB_CLIENT_ID=your-github-oauth-app-id
GITHUB_CLIENT_SECRET=your-github-oauth-secret
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-secret
```

### 3. Test Authentication

Visit http://localhost:3000/auth to see the login page. You can now:
- Sign up with email/password
- Login with GitHub
- Login with Google

## 📝 Creating Your First API

Let's create a simple task management API:

### 1. Create Task Model

Create `api/tasks/model.js`:

```javascript
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
      defaultValue: 'pending'
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high'),
      defaultValue: 'medium'
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  });

  return Task;
};
```

### 2. Create Task Routes

Create `api/tasks/routes.js`:

```javascript
const router = require('express').Router();
const { Task } = require('./model');
const { authenticate } = require('../middleware/auth');

// Get all tasks for authenticated user
router.get('/', authenticate, async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']]
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new task
router.post('/', authenticate, async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      userId: req.user.id
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update task
router.put('/:id', authenticate, async (req, res) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id, userId: req.user.id }
    });
    
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    await task.update(req.body);
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete task
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id, userId: req.user.id }
    });
    
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

### 3. Register Routes

Update `api/index.js`:

```javascript
const taskRoutes = require('./tasks/routes');

app.use('/api/tasks', taskRoutes);
```

## 🎨 Building the Frontend

Now let's create the frontend components to interact with our API:

### 1. Task Service

Create `src/services/taskService.js`:

```javascript
import api from './api';

export const taskService = {
  // Get all tasks
  async getTasks() {
    const response = await api.get('/tasks');
    return response.data;
  },

  // Create task
  async createTask(taskData) {
    const response = await api.post('/tasks', taskData);
    return response.data;
  },

  // Update task
  async updateTask(id, taskData) {
    const response = await api.put(`/tasks/${id}`, taskData);
    return response.data;
  },

  // Delete task
  async deleteTask(id) {
    await api.delete(`/tasks/${id}`);
  }
};
```

### 2. Task List Component

Create `src/components/tasks/TaskList.jsx`:

```jsx
import React, { useState, useEffect } from 'react';
import { taskService } from '../../services/taskService';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const newTask = await taskService.createTask(taskData);
      setTasks([newTask, ...tasks]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      const updatedTask = await taskService.updateTask(id, taskData);
      setTasks(tasks.map(task => 
        task.id === id ? updatedTask : task
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      <TaskForm onSubmit={handleCreateTask} />
      
      <div className="tasks">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
      
      {tasks.length === 0 && (
        <div className="empty-state">
          <p>No tasks yet. Create your first task above!</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
```

### 3. Task Item Component

Create `src/components/tasks/TaskItem.jsx`:

```jsx
import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(task);

  const handleSave = () => {
    onUpdate(task.id, editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(task);
    setIsEditing(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'green';
      case 'in_progress': return 'blue';
      default: return 'gray';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'red';
      case 'medium': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div className="task-edit">
          <input
            type="text"
            value={editData.title}
            onChange={(e) => setEditData({...editData, title: e.target.value})}
          />
          <textarea
            value={editData.description}
            onChange={(e) => setEditData({...editData, description: e.target.value})}
          />
          <select
            value={editData.status}
            onChange={(e) => setEditData({...editData, status: e.target.value})}
          >
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <select
            value={editData.priority}
            onChange={(e) => setEditData({...editData, priority: e.target.value})}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <div className="task-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="task-view">
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          
          <div className="task-meta">
            <span className={`status ${getStatusColor(task.status)}`}>
              {task.status.replace('_', ' ')}
            </span>
            <span className={`priority ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            {task.dueDate && (
              <span className="due-date">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
          
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
```

## 🚀 Testing Your Application

### 1. Run the Application

```bash
# Start the development server
npm run dev
```

### 2. Test the Features

1. **Authentication**: Go to http://localhost:3000/auth and create an account
2. **Create Tasks**: Use the form to add new tasks
3. **Manage Tasks**: Edit, update status, and delete tasks
4. **Real-time Updates**: See changes immediately

### 3. API Testing

Use curl or Postman to test your API:

```bash
# Get all tasks (requires authentication)
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     http://localhost:3000/api/tasks

# Create a new task
curl -X POST \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{"title":"My first task","description":"This is a test task"}' \
     http://localhost:3000/api/tasks
```

## 🎯 Next Steps

Congratulations! You've built a complete task management application with PlatformNX. Here's what to explore next:

### Advanced Features
- **Real-time Updates**: Add WebSocket support for live updates
- **File Uploads**: Add file attachments to tasks
- **Notifications**: Implement email and in-app notifications
- **Analytics**: Add task completion analytics and reporting

### Deployment
- **Production Setup**: Configure for production deployment
- **Database Optimization**: Add indexes and optimize queries
- **Caching**: Implement Redis caching for better performance
- **Monitoring**: Set up logging and monitoring

### Scaling
- **Microservices**: Split into microservices architecture
- **Load Balancing**: Add load balancer for high availability
- **CI/CD**: Set up automated testing and deployment

## 📚 Additional Resources

- **[API Documentation](../api/overview)** - Complete API reference
- **[Component Library](../components/core/authentication)** - Reusable components
- **[Deployment Guide](../advanced/development/deployment)** - Production deployment
- **[Best Practices](../advanced/architecture/system-design)** - Architecture guidelines

---

> **🎉 Congratulations!** You've successfully built your first PlatformNX application. You now have a solid foundation to build more complex applications. Happy coding!
