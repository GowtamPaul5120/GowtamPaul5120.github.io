import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import './styles.css';

export default function EditThisPage(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  
  // Get the edit URL from config or construct it
  const getEditUrl = () => {
    const baseUrl = siteConfig.customFields?.editUrl || 
      'https://github.com/your-username/platformnx-docs/tree/main/';
    
    // Convert current URL to file path
    const docsPath = location.pathname.replace('/docs/', '');
    const filePath = docsPath === '' ? 'intro.md' : `${docsPath}.md`;
    
    return `${baseUrl}docs/${filePath}`;
  };

  const handleEditClick = () => {
    // Check if user wants to show auth modal (optional)
    const shouldShowAuth = localStorage.getItem('platformnx-auth-required') === 'true';
    
    if (shouldShowAuth) {
      // Show authentication modal
      const event = new CustomEvent('showAuthModal', { 
        detail: { editUrl: getEditUrl() } 
      });
      window.dispatchEvent(event);
    } else {
      // Direct redirect to GitHub
      window.open(getEditUrl(), '_blank');
    }
  };

  return (
    <div className="platformnx-edit-this-page">
      <button 
        onClick={handleEditClick}
        className="edit-button"
        title="Edit this page on GitHub"
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="edit-icon"
        >
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
        Edit this page
      </button>
      
      <div className="edit-instructions">
        <p>
          <strong>How to edit:</strong> Click the button above to open this page in GitHub.
          Make your changes and create a pull request. Your changes will be reviewed
          and merged automatically if they pass the checks.
        </p>
      </div>
    </div>
  );
}
