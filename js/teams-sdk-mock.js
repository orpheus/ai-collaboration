// Mock Microsoft Teams SDK for demo purposes
window.microsoftTeams = {
    // Mock context
    context: {
        user: {
            id: 'mock-user-123',
            displayName: 'Demo User',
            userPrincipalName: 'demo.user@company.com'
        },
        team: {
            displayName: 'Demo Team',
            groupId: 'mock-team-456'
        },
        tenant: {
            id: 'mock-tenant-789'
        },
        theme: 'default'
    },

    // Mock initialization
    initialize: function(callback) {
        console.log('Mock Teams SDK initialized');
        if (callback) callback();
    },

    // Mock authentication
    authentication: {
        authenticate: function(authParams) {
            console.log('Mock authentication started');
            setTimeout(() => {
                if (authParams.successCallback) {
                    authParams.successCallback({
                        accessToken: 'mock-access-token-' + Date.now(),
                        idToken: 'mock-id-token-' + Date.now()
                    });
                }
            }, 1000);
        },
        
        getAuthToken: function(authParams) {
            console.log('Mock getAuthToken called');
            setTimeout(() => {
                if (authParams.successCallback) {
                    authParams.successCallback('mock-auth-token-' + Date.now());
                }
            }, 500);
        }
    },

    // Mock settings
    settings: {
        setValidityState: function(validityState) {
            console.log('Mock setValidityState:', validityState);
        },
        
        registerOnSaveHandler: function(saveHandler) {
            console.log('Mock registerOnSaveHandler registered');
            window._mockSaveHandler = saveHandler;
        },
        
        registerOnRemoveHandler: function(removeHandler) {
            console.log('Mock registerOnRemoveHandler registered');
            window._mockRemoveHandler = removeHandler;
        }
    },

    // Mock theme change handler
    registerOnThemeChangeHandler: function(handler) {
        console.log('Mock theme change handler registered');
        window._mockThemeHandler = handler;
        
        // Simulate theme changes for demo
        setTimeout(() => {
            if (Math.random() > 0.5) {
                this.context.theme = 'dark';
                handler('dark');
            }
        }, 5000);
    },

    // Mock utility functions
    getContext: function(callback) {
        if (callback) {
            callback(this.context);
        }
        return this.context;
    },

    // Mock navigation
    navigateToTab: function(tabInstance, onComplete) {
        console.log('Mock navigation to tab:', tabInstance);
        if (onComplete) onComplete(true);
    }
};

// Mock Graph API client
window.MockGraphAPI = {
    getUser: async function(token) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 'mock-user-123',
                    displayName: 'Demo User',
                    mail: 'demo.user@company.com',
                    jobTitle: 'Software Engineer',
                    department: 'Engineering'
                });
            }, 300);
        });
    },
    
    getTeam: async function(token, teamId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: teamId,
                    displayName: 'Demo Team',
                    description: 'A demo team for testing purposes'
                });
            }, 300);
        });
    }
};

// Auto-initialize on load
document.addEventListener('DOMContentLoaded', function() {
    if (window.microsoftTeams) {
        window.microsoftTeams.initialize();
    }
});