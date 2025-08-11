const { useState, useEffect, useCallback } = React;

// Performance monitoring component
function PerformanceMonitor() {
    const [loadTime, setLoadTime] = useState(0);
    const [renderTime, setRenderTime] = useState(0);

    useEffect(() => {
        // Measure initial load time
        const startTime = performance.now();
        setLoadTime(startTime);
        
        // Measure render time
        const renderStart = performance.now();
        setTimeout(() => {
            const renderEnd = performance.now();
            setRenderTime(Math.round(renderEnd - renderStart));
        }, 0);
    }, []);

    return (
        <div className="performance-indicator">
            Load: {Math.round(loadTime)}ms | Render: {renderTime}ms
        </div>
    );
}

// Hero Search Component
function HeroSearch({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className="hero-search">
            <h2 className="hero-search-title">
                What barriers are you facing in your work or well being today?
            </h2>
            <input
                type="text"
                className="search-input"
                placeholder="Describe your challenge or search for solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch(searchQuery);
                    }
                }}
            />
        </div>
    );
}

// Example Prompts Component
function ExamplePrompts({ onPromptClick }) {
    const prompts = [
        "I have ADHD",
        "I'm going through a divorce", 
        "Stressed"
    ];

    return (
        <div className="example-prompts">
            <h3 className="section-title">Common Challenges</h3>
            <div className="prompt-buttons">
                {prompts.map((prompt, index) => (
                    <button 
                        key={index}
                        className="prompt-button"
                        onClick={() => onPromptClick(prompt)}
                    >
                        {prompt}
                    </button>
                ))}
            </div>
        </div>
    );
}

// Success Enabler Cards Component
function SuccessEnablers({ searchQuery }) {
    const enablers = [
        {
            title: "Organizational Tools",
            description: "Digital and physical tools to help manage tasks, deadlines, and priorities. Perfect for those with ADHD or busy schedules.",
            tag: "Productivity",
            category: "Tools"
        },
        {
            title: "Noise Cancelling Headphones", 
            description: "High-quality headphones to create a focused work environment and reduce distractions from open office noise.",
            tag: "Focus",
            category: "Equipment"
        },
        {
            title: "Care Giving Support",
            description: "Resources and assistance for employees managing eldercare, childcare, or other family responsibilities.",
            tag: "Support",
            category: "Life Balance"
        }
    ];

    // Filter enablers based on search query
    const filteredEnablers = searchQuery 
        ? enablers.filter(enabler => 
            enabler.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            enabler.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            enabler.tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : enablers;

    return (
        <div className="success-enablers">
            <h3 className="section-title">
                {searchQuery ? `Success Enablers for "${searchQuery}"` : "Featured Success Enablers"}
            </h3>
            <div className="enabler-cards">
                {filteredEnablers.map((enabler, index) => (
                    <div 
                        key={index}
                        className="enabler-card"
                        onClick={() => {
                            console.log(`Clicked on: ${enabler.title}`);
                            alert(`Learn more about ${enabler.title}\n\n${enabler.description}`);
                        }}
                    >
                        <h4 className="enabler-card-title">{enabler.title}</h4>
                        <p className="enabler-card-description">{enabler.description}</p>
                        <span className="enabler-card-tag">{enabler.tag}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Category Browse Component
function CategoryBrowse({ onCategoryClick }) {
    const categories = [
        { name: "Mental Health", icon: "🧠", count: 45 },
        { name: "Physical Health", icon: "💪", count: 38 },
        { name: "Work Tools", icon: "🛠️", count: 67 },
        { name: "Life Balance", icon: "⚖️", count: 29 },
        { name: "Communication", icon: "💬", count: 34 },
        { name: "Learning", icon: "📚", count: 52 }
    ];

    return (
        <div className="category-browse">
            <h3 className="section-title">Browse by Category</h3>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div 
                        key={index}
                        className="category-card"
                        onClick={() => {
                            if (onCategoryClick) {
                                onCategoryClick(category.name);
                            }
                        }}
                    >
                        <div className="category-icon">{category.icon}</div>
                        <div className="category-name">{category.name}</div>
                        <div className="category-count">{category.count} items</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Teams Page Component
function TeamsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Initialize Teams SDK and get user context
        if (window.microsoftTeams) {
            window.microsoftTeams.getContext((context) => {
                setUser(context.user);
                console.log('Teams context:', context);
            });

            // Register theme change handler
            window.microsoftTeams.registerOnThemeChangeHandler((theme) => {
                document.documentElement.setAttribute('data-theme', theme);
                console.log('Theme changed to:', theme);
            });
        }

        // Mock authentication
        if (window.MockGraphAPI) {
            window.MockGraphAPI.getUser('mock-token').then(userData => {
                console.log('Mock user data:', userData);
            });
        }
    }, []);

    const handleSearch = useCallback((query) => {
        setSearchQuery(query);
        console.log('Searching for:', query);
    }, []);

    const handlePromptClick = useCallback((prompt) => {
        setSearchQuery(prompt);
        console.log('Selected prompt:', prompt);
    }, []);

    const handleCategoryClick = useCallback((category) => {
        console.log('Selected category:', category);
        alert(`Browsing ${category} category\n\nThis would show all Success Enablers in the ${category} category.`);
    }, []);

    return (
        <div className="teams-app">
            <PerformanceMonitor />
            
            <header className="teams-header">
                <h1 className="teams-title">Inclusively Success Enablers</h1>
                <p className="teams-subtitle">
                    {user ? `Welcome, ${user.displayName}` : 'Find the support you need to succeed at work'}
                </p>
            </header>

            <HeroSearch onSearch={handleSearch} />
            
            <ExamplePrompts onPromptClick={handlePromptClick} />
            
            <SuccessEnablers searchQuery={searchQuery} />
            
            <CategoryBrowse onCategoryClick={handleCategoryClick} />
        </div>
    );
}

// Simple Router Component
function Router() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Route to Teams page by default or if path includes 'teams'
    if (currentPath === '/' || currentPath.includes('teams')) {
        return <TeamsPage />;
    }

    // Default fallback
    return <TeamsPage />;
}

// Main App Component
function App() {
    useEffect(() => {
        // Set initial theme based on Teams context or system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = prefersDark ? 'dark' : 'default';
        document.documentElement.setAttribute('data-theme', initialTheme);

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = (e) => {
                if (!window.microsoftTeams || !window.microsoftTeams.context.theme) {
                    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'default');
                }
            };
            
            mediaQuery.addListener(handleChange);
            return () => mediaQuery.removeListener(handleChange);
        }
    }, []);

    return <Router />;
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));