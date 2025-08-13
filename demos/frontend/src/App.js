import React, { useState, useEffect } from 'react';
import './App.css';
import FrameworkDisplay from './components/FrameworkDisplay';
import ChatInterface from './components/ChatInterface';

function App() {
  const [activeTab, setActiveTab] = useState('framework');
  const [frameworkData, setFrameworkData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (activeTab === 'framework' && !frameworkData) {
      fetchFrameworkData();
    }
  }, [activeTab, frameworkData]);

  const fetchFrameworkData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/successEnablersFramework');
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setFrameworkData(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Success Enablers Framework</h1>
        <p>AI Engineering Demo Application</p>
      </header>
      
      <div className="tabs">
        <button 
          className={activeTab === 'framework' ? 'active' : ''}
          onClick={() => setActiveTab('framework')}
        >
          Framework Data
        </button>
        <button 
          className={activeTab === 'chat' ? 'active' : ''}
          onClick={() => setActiveTab('chat')}
        >
          Chat Interface
        </button>
      </div>

      <main className="content">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        
        {activeTab === 'framework' && !loading && !error && (
          <FrameworkDisplay data={frameworkData} />
        )}
        
        {activeTab === 'chat' && (
          <ChatInterface />
        )}
      </main>
    </div>
  );
}

export default App;