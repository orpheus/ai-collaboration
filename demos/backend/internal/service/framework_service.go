package service

import (
	"backend/internal/repository"
	"fmt"
	"strings"
)

// FrameworkService handles business logic for the success enablers framework
type FrameworkService struct {
	repo repository.DbRepository
}

// NewFrameworkService creates a new instance of FrameworkService
func NewFrameworkService(repo repository.DbRepository) *FrameworkService {
	return &FrameworkService{
		repo: repo,
	}
}

// GetSuccessEnablersFramework retrieves all framework data
func (s *FrameworkService) GetSuccessEnablersFramework() (interface{}, error) {
	// Mock data for demo purposes
	mockData := []map[string]interface{}{
		{
			"category": "Workplace Accommodations",
			"items": []string{
				"Flexible work schedules",
				"Remote work options",
				"Assistive technology",
				"Modified workspaces",
			},
		},
		{
			"category": "Communication Support",
			"items": []string{
				"Written instructions",
				"Visual aids",
				"Sign language interpreters",
				"Communication devices",
			},
		},
		{
			"category": "Physical Accessibility",
			"items": []string{
				"Wheelchair access",
				"Adjustable desks",
				"Ergonomic equipment",
				"Accessible parking",
			},
		},
	}
	
	return mockData, nil
}

// ChatWithFramework provides an interactive chat interface for framework queries
func (s *FrameworkService) ChatWithFramework(query string) (string, error) {
	// This function contains intentional complexity for demo purposes
	// It has multiple code paths, edge cases, and potential issues for testing
	
	// Normalize the query
	normalizedQuery := strings.ToLower(strings.TrimSpace(query))
	
	// Check for empty query (edge case #1)
	if normalizedQuery == "" {
		return "", fmt.Errorf("query cannot be empty")
	}
	
	// Check query length (edge case #2)
	if len(normalizedQuery) < 3 {
		return "Please provide a more detailed question.", nil
	}
	
	// Mock keyword extraction (simplified)
	keywords := extractKeywords(normalizedQuery)
	
	// Determine response based on keywords
	var response strings.Builder
	
	// Category-based responses
	if contains(keywords, []string{"accommodation", "workplace", "adjust"}) {
		response.WriteString("Based on your query about workplace accommodations, ")
		response.WriteString("here are some relevant success enablers:\n\n")
		response.WriteString("• Flexible work schedules\n")
		response.WriteString("• Remote work options\n")
		response.WriteString("• Modified workspaces\n")
		response.WriteString("• Assistive technology\n\n")
		response.WriteString("Would you like more specific information about any of these?")
	} else if contains(keywords, []string{"communication", "talk", "speak", "language"}) {
		response.WriteString("For communication support, consider these options:\n\n")
		response.WriteString("• Written instructions for clarity\n")
		response.WriteString("• Visual aids and diagrams\n")
		response.WriteString("• Sign language interpretation services\n")
		response.WriteString("• Alternative communication devices\n")
	} else if contains(keywords, []string{"physical", "mobility", "access", "wheelchair"}) {
		response.WriteString("Physical accessibility accommodations include:\n\n")
		response.WriteString("• Wheelchair accessible entrances and pathways\n")
		response.WriteString("• Height-adjustable desks and workstations\n")
		response.WriteString("• Ergonomic equipment and tools\n")
		response.WriteString("• Reserved accessible parking spaces\n")
	} else if contains(keywords, []string{"help", "what", "how", "explain"}) {
		// General help response
		response.WriteString("I can help you explore disability accommodations and success enablers. ")
		response.WriteString("Try asking about:\n\n")
		response.WriteString("• Workplace accommodations\n")
		response.WriteString("• Communication support\n")
		response.WriteString("• Physical accessibility\n")
		response.WriteString("• Specific disabilities or conditions\n")
	} else {
		// Default response for unrecognized queries
		response.WriteString("I understand you're asking about: \"")
		response.WriteString(query)
		response.WriteString("\"\n\n")
		response.WriteString("While I don't have specific information on that topic, ")
		response.WriteString("I can help with workplace accommodations, communication support, ")
		response.WriteString("and physical accessibility. Please feel free to ask about these areas.")
	}
	
	// Log interaction if repository is available (potential nil pointer)
	if s.repo != nil {
		// This could fail and should be handled
		err := s.repo.LogChatInteraction(query, response.String())
		if err != nil {
			// Logging error but not failing the request
			fmt.Printf("Failed to log interaction: %v\n", err)
		}
	}
	
	// Simulate processing delay edge case
	if len(query) > 100 {
		// Long queries might need special handling
		return "Your query is quite detailed. " + response.String(), nil
	}
	
	return response.String(), nil
}

// extractKeywords extracts keywords from the query (simplified version)
func extractKeywords(query string) []string {
	// Remove common words (simplified stopword removal)
	stopWords := []string{"the", "is", "at", "which", "on", "a", "an", "and", "or", "but", "in", "with", "to", "for"}
	words := strings.Fields(query)
	
	keywords := []string{}
	for _, word := range words {
		word = strings.ToLower(word)
		if !contains(stopWords, []string{word}) && len(word) > 2 {
			keywords = append(keywords, word)
		}
	}
	
	return keywords
}

// contains checks if any target string is in the source slice
func contains(source []string, targets []string) bool {
	for _, s := range source {
		for _, t := range targets {
			if strings.Contains(s, t) || strings.Contains(t, s) {
				return true
			}
		}
	}
	return false
}