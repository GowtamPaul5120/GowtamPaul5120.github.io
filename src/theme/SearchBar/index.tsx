import React, { useState, useCallback } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import "./styles.css";

interface SearchResult {
  title: string;
  url: string;
  content: string;
  score: number;
}

export default function SearchBar(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const searchEndpoint =
    (siteConfig.customFields?.searchEndpoint as string) || "/api/search";

  // Create a debounced search function
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleSearch = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        setShowResults(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `${searchEndpoint}?q=${encodeURIComponent(searchQuery)}`,
        );
        if (response.ok) {
          const data = await response.json();
          setResults(data.results || []);
          setShowResults(true);
        }
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [searchEndpoint],
  );

  const debouncedSearch = useCallback(debounce(handleSearch, 300), [
    handleSearch,
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleResultClick = (url: string) => {
    history.push(url);
    setShowResults(false);
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowResults(false);
    }
  };

  return (
    <div className="platformnx-search-bar">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search documentation... (AI-powered)"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setShowResults(true)}
          className="search-input"
        />
        {isLoading && <div className="search-spinner" />}
      </div>

      {showResults && (
        <div className="search-results">
          {results.length === 0 ? (
            <div className="search-no-results">
              No results found for "{query}"
            </div>
          ) : (
            results.map((result, index) => (
              <div
                key={index}
                className="search-result-item"
                onClick={() => handleResultClick(result.url)}
              >
                <div className="search-result-title">{result.title}</div>
                <div className="search-result-content">
                  {result.content.substring(0, 150)}...
                </div>
                <div className="search-result-url">{result.url}</div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
