# Backend Automation Demo Prompts

## Context
Adding SSO authentication to the Go API in `demos/backend`

---

## 🔴 Bad Prompt
"add authentication"

**Why it's bad:**
- No specification of auth type
- No implementation details
- No integration context
- Could mean anything from basic auth to OAuth

---

## 🟡 Good Prompt
"Add a new route to the Go API for SSO authentication using OAuth 2.0. It should handle the callback from Microsoft Azure AD."

**Why it's better:**
- Specifies SSO and OAuth 2.0
- Mentions Microsoft Azure AD
- Clear about needing a callback route
- Focused on a specific task

---

## 🟢 Great Prompt
"Add Microsoft Teams SSO authentication to the Go API in demos/backend. 

Requirements:
1. Create a new route: POST /auth/teams/callback
2. Add these packages to go.mod if needed (but prefer no external dependencies if possible):
   - Use standard library for JWT parsing if feasible
   - Only add minimal dependencies

3. In pkg/routes.go, add the new route that:
   - Accepts the Teams authentication token in the Authorization header
   - Validates the token signature
   - Extracts user information (name, email, teams_id)
   - Returns a session token for subsequent API calls

4. Create a new AuthService in internal/service/auth_service.go with methods:
   - ValidateTeamsToken(token string) (*UserInfo, error)
   - GenerateSessionToken(user *UserInfo) (string, error)
   - ValidateSessionToken(token string) (*UserInfo, error)

5. Add middleware in pkg/middleware/auth.go:
   - RequireAuth() to protect endpoints
   - Attach it to the existing routes

6. Include proper error handling for:
   - Invalid tokens
   - Expired tokens  
   - Network failures to Microsoft's validation endpoint

7. Add appropriate CORS headers for Teams app integration

Follow the existing code style and patterns in the codebase."

**Why it's great:**
- Complete implementation plan
- Specific file locations and method signatures
- Integration considerations (CORS, Teams)
- Error handling requirements
- Respects existing patterns
- Minimal dependency approach
- Clear architectural decisions