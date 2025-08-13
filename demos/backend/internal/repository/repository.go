package repository

// DbRepository interface defines the contract for database operations
type DbRepository interface {
	// GetFrameworkData retrieves all success enablers framework data
	GetFrameworkData() ([]FrameworkItem, error)
	
	// SearchFramework searches for specific framework items based on keywords
	SearchFramework(keywords []string) ([]FrameworkItem, error)
	
	// GetFrameworkByCategory retrieves framework items by category
	GetFrameworkByCategory(category string) ([]FrameworkItem, error)
	
	// LogChatInteraction logs user interactions for analytics
	LogChatInteraction(query string, response string) error
}

// FrameworkItem represents a success enabler item in the framework
type FrameworkItem struct {
	ID          string   `json:"id"`
	Category    string   `json:"category"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	Examples    []string `json:"examples"`
}