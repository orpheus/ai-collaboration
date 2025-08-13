# Codebase Analysis Augmentation Demo Prompt

## Context
Using AI to analyze and document an existing codebase structure

---

## Prompt Template

"Please analyze the codebase structure in demos/backend and provide comprehensive documentation.

### Analysis Scope

Review all Go files in the project and create documentation covering:

### 1. Architecture Overview
- Describe the overall application architecture
- Identify the design patterns used (MVC, Repository, Service layer, etc.)
- Map the request flow from route to response
- Identify the separation of concerns

### 2. Package Structure and Purpose
For each package/directory:
- **main**: Entry point and initialization
- **pkg**: Public interfaces and routing
- **internal/service**: Business logic
- **internal/repository**: Data access layer

Document:
- Primary responsibility of each package
- Key types and interfaces
- Dependencies between packages
- Why internal vs pkg (Go conventions)

### 3. Key Components Deep Dive

For each major component, provide:
- **Purpose**: What problem it solves
- **Inputs/Outputs**: Data flow
- **Dependencies**: What it needs to function
- **Patterns**: Design patterns employed

Components to analyze:
- Router setup and middleware
- FrameworkService and its methods
- DbRepository interface design
- Error handling strategy

### 4. API Contract Documentation

For each endpoint:
```
Endpoint: [METHOD] /path
Purpose: [What it does]
Request: [Parameters, headers, body]
Response: [Success and error formats]
Example: [curl command]
```

### 5. Data Flow Diagrams

Create ASCII diagrams showing:
- Request lifecycle
- Service layer interactions
- Error propagation paths

### 6. Code Patterns and Conventions

Identify:
- Naming conventions used
- Error handling patterns
- Testing approach (if tests exist)
- Code organization principles

### 7. Integration Points

Document:
- External dependencies (Gin framework)
- Database interface design
- CORS configuration
- Potential integration points for extensions

### 8. Technical Debt and Improvement Opportunities

Identify:
- Mock implementations that need real implementations
- Missing middleware (authentication, logging, metrics)
- Scalability considerations
- Testing gaps

### Output Format

Structure the documentation as a README.md that a new developer could use to quickly understand the codebase. Include:
- Table of contents
- Quick start guide
- Architecture diagrams
- Code examples
- Development guidelines

This analysis will help the team understand how AI can quickly onboard new developers and maintain up-to-date documentation."

---

## Why This Prompt Excels

**Systematic Approach**: Covers architecture down to implementation details

**Developer-Focused**: Outputs practical documentation developers actually need

**Pattern Recognition**: Identifies design patterns and conventions

**Visual Elements**: Includes diagrams for better understanding

**Forward-Looking**: Identifies technical debt and improvements

**Onboarding Tool**: Creates genuinely useful documentation for new team members

This demonstrates AI as a **documentation partner** that can maintain living documentation as code evolves.