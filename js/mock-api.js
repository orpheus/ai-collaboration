// Mock Backend API for Teams Integration Demo
class MockAPI {
    constructor() {
        this.baseURL = '/api';
        this.mockData = {
            users: [
                {
                    id: 'user-123',
                    teamsId: 'mock-user-123',
                    displayName: 'Demo User',
                    email: 'demo.user@company.com',
                    department: 'Engineering',
                    employerId: 'company-456'
                }
            ],
            employers: [
                {
                    id: 'company-456',
                    name: 'Demo Company',
                    domain: 'company.com',
                    enabledCategories: ['Mental Health', 'Work Tools', 'Physical Health']
                }
            ],
            successEnablers: [
                {
                    id: 'se-1',
                    title: 'Organizational Tools',
                    description: 'Digital and physical tools to help manage tasks, deadlines, and priorities. Perfect for those with ADHD or busy schedules.',
                    category: 'Work Tools',
                    tags: ['Productivity', 'ADHD', 'Organization'],
                    employerRestricted: false,
                    provider: 'Internal',
                    cost: 'Free'
                },
                {
                    id: 'se-2',
                    title: 'Noise Cancelling Headphones',
                    description: 'High-quality headphones to create a focused work environment and reduce distractions from open office noise.',
                    category: 'Work Tools',
                    tags: ['Focus', 'Equipment', 'Noise'],
                    employerRestricted: true,
                    provider: 'Sony/Bose',
                    cost: '$200-400'
                },
                {
                    id: 'se-3',
                    title: 'Care Giving Support',
                    description: 'Resources and assistance for employees managing eldercare, childcare, or other family responsibilities.',
                    category: 'Life Balance',
                    tags: ['Support', 'Family', 'Care'],
                    employerRestricted: true,
                    provider: 'Care.com',
                    cost: 'Employer Sponsored'
                },
                {
                    id: 'se-4',
                    title: 'Mental Health Counseling',
                    description: 'Professional counseling services for stress, anxiety, depression, and other mental health challenges.',
                    category: 'Mental Health',
                    tags: ['Counseling', 'Therapy', 'Support'],
                    employerRestricted: true,
                    provider: 'BetterHelp/Lyra',
                    cost: 'Covered by Insurance'
                },
                {
                    id: 'se-5',
                    title: 'Flexible Work Arrangements',
                    description: 'Work from home options, flexible hours, and accommodations for various life circumstances.',
                    category: 'Work Tools',
                    tags: ['Flexibility', 'Remote', 'Accommodation'],
                    employerRestricted: true,
                    provider: 'HR Policy',
                    cost: 'Free'
                }
            ],
            sessions: []
        };
    }

    // Mock Teams authentication
    async validateTeamsToken(token) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    valid: true,
                    user: {
                        id: 'mock-user-123',
                        displayName: 'Demo User',
                        email: 'demo.user@company.com',
                        tenantId: 'mock-tenant-789'
                    },
                    employer: {
                        id: 'company-456',
                        name: 'Demo Company'
                    }
                });
            }, 300);
        });
    }

    // Get user profile
    async getUserProfile(teamsUserId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = this.mockData.users.find(u => u.teamsId === teamsUserId);
                resolve(user || null);
            }, 200);
        });
    }

    // Search Success Enablers
    async searchSuccessEnablers(query, employerId = null, categories = []) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let results = [...this.mockData.successEnablers];

                // Filter by employer permissions
                if (employerId) {
                    const employer = this.mockData.employers.find(e => e.id === employerId);
                    if (employer) {
                        results = results.filter(se => 
                            !se.employerRestricted || 
                            employer.enabledCategories.includes(se.category)
                        );
                    }
                }

                // Filter by query
                if (query && query.trim()) {
                    const searchTerms = query.toLowerCase().split(' ');
                    results = results.filter(se => 
                        searchTerms.some(term => 
                            se.title.toLowerCase().includes(term) ||
                            se.description.toLowerCase().includes(term) ||
                            se.tags.some(tag => tag.toLowerCase().includes(term))
                        )
                    );
                }

                // Filter by categories
                if (categories.length > 0) {
                    results = results.filter(se => categories.includes(se.category));
                }

                resolve({
                    results,
                    count: results.length,
                    query,
                    categories
                });
            }, 400);
        });
    }

    // Get Success Enabler by ID
    async getSuccessEnabler(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const enabler = this.mockData.successEnablers.find(se => se.id === id);
                resolve(enabler || null);
            }, 200);
        });
    }

    // Track usage analytics (anonymous)
    async trackUsage(action, data = {}) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const sessionId = 'session-' + Date.now();
                const usage = {
                    sessionId,
                    action,
                    data,
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent
                };
                
                this.mockData.sessions.push(usage);
                console.log('Usage tracked:', usage);
                resolve({ success: true, sessionId });
            }, 100);
        });
    }

    // Get categories with counts
    async getCategories(employerId = null) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let enablers = [...this.mockData.successEnablers];

                // Filter by employer permissions
                if (employerId) {
                    const employer = this.mockData.employers.find(e => e.id === employerId);
                    if (employer) {
                        enablers = enablers.filter(se => 
                            !se.employerRestricted || 
                            employer.enabledCategories.includes(se.category)
                        );
                    }
                }

                // Count by category
                const categoryCounts = {};
                enablers.forEach(se => {
                    categoryCounts[se.category] = (categoryCounts[se.category] || 0) + 1;
                });

                const categories = Object.keys(categoryCounts).map(name => ({
                    name,
                    count: categoryCounts[name],
                    icon: this.getCategoryIcon(name)
                }));

                resolve(categories);
            }, 300);
        });
    }

    getCategoryIcon(category) {
        const icons = {
            'Mental Health': '🧠',
            'Physical Health': '💪',
            'Work Tools': '🛠️',
            'Life Balance': '⚖️',
            'Communication': '💬',
            'Learning': '📚'
        };
        return icons[category] || '📋';
    }

    // Health check endpoint
    async healthCheck() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    status: 'healthy',
                    timestamp: new Date().toISOString(),
                    version: '1.0.0-demo'
                });
            }, 100);
        });
    }
}

// Initialize global mock API instance
window.MockAPI = new MockAPI();

// Mock API endpoints for fetch requests
const mockEndpoints = {
    '/api/teams/auth': async (options) => {
        const token = options.headers?.Authorization?.replace('Bearer ', '');
        return await window.MockAPI.validateTeamsToken(token);
    },
    
    '/api/users/profile': async (options) => {
        const teamsUserId = options.params?.teamsUserId || 'mock-user-123';
        return await window.MockAPI.getUserProfile(teamsUserId);
    },
    
    '/api/success-enablers/search': async (options) => {
        const { query, employerId, categories } = options.params || {};
        return await window.MockAPI.searchSuccessEnablers(query, employerId, categories);
    },
    
    '/api/success-enablers/:id': async (options) => {
        const id = options.pathParams?.id;
        return await window.MockAPI.getSuccessEnabler(id);
    },
    
    '/api/categories': async (options) => {
        const { employerId } = options.params || {};
        return await window.MockAPI.getCategories(employerId);
    },
    
    '/api/analytics/track': async (options) => {
        const { action, data } = options.body || {};
        return await window.MockAPI.trackUsage(action, data);
    },
    
    '/api/health': async () => {
        return await window.MockAPI.healthCheck();
    }
};

// Override fetch for mock API calls
const originalFetch = window.fetch;
window.fetch = async function(url, options = {}) {
    // Check if this is a mock API call
    for (const [endpoint, handler] of Object.entries(mockEndpoints)) {
        const endpointRegex = endpoint.replace(/:\w+/g, '([^/]+)');
        const regex = new RegExp(`^${endpointRegex}$`);
        const match = url.match(regex);
        
        if (match) {
            console.log(`Mock API call: ${url}`);
            
            // Extract path parameters
            const pathParams = {};
            const paramNames = endpoint.match(/:(\w+)/g);
            if (paramNames) {
                paramNames.forEach((param, index) => {
                    const key = param.substring(1);
                    pathParams[key] = match[index + 1];
                });
            }
            
            // Parse query parameters
            const urlObj = new URL(url, 'http://localhost');
            const params = Object.fromEntries(urlObj.searchParams);
            
            // Parse body
            let body = null;
            if (options.body) {
                try {
                    body = JSON.parse(options.body);
                } catch (e) {
                    body = options.body;
                }
            }
            
            const mockOptions = {
                ...options,
                params,
                pathParams,
                body,
                headers: options.headers || {}
            };
            
            try {
                const result = await handler(mockOptions);
                return {
                    ok: true,
                    status: 200,
                    json: async () => result,
                    text: async () => JSON.stringify(result)
                };
            } catch (error) {
                return {
                    ok: false,
                    status: 500,
                    json: async () => ({ error: error.message }),
                    text: async () => JSON.stringify({ error: error.message })
                };
            }
        }
    }
    
    // If not a mock API call, use original fetch
    return originalFetch(url, options);
};

console.log('Mock API initialized with endpoints:', Object.keys(mockEndpoints));