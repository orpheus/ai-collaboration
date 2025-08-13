# Design Thinking Augmentation Demo Prompt

## Context
Using AI as a thinking partner for system design discussions

---

## Prompt Template

"I need help designing an authentication system for our Microsoft Teams application that integrates with our disability accommodation framework. Act as a system architect and help me think through this design.

### Current Context

- **Application**: Teams app for disability accommodations
- **Backend**: Go API with Gin framework (see demos/backend)
- **Frontend**: React app embedded in Teams
- **Users**: Employees requesting accommodations, HR managers, administrators
- **Scale**: 500-5000 users per organization

### Requirements to Consider

1. **Authentication Flow**
   - Must use Teams SSO for seamless experience
   - Support different permission levels
   - Handle token refresh without user interaction
   - Work within Teams desktop, web, and mobile clients

2. **Security Requirements**
   - HIPAA compliance for health-related accommodation data
   - Role-based access control (RBAC)
   - Audit logging for all data access
   - Encryption at rest and in transit

3. **Technical Constraints**
   - Teams app manifest limitations
   - CORS policies in embedded contexts
   - Token size limits in headers
   - Microsoft Graph API rate limits

### Design Discussion Points

Please help me think through:

#### 1. Architecture Decisions
- Should we use Teams SSO tokens directly or exchange for our own JWT?
- Where should session state live (Redis, in-memory, database)?
- How do we handle multi-tenant scenarios?
- Microservices vs monolithic for auth service?

#### 2. Token Strategy
- What claims should our tokens include?
- How long should tokens live?
- Refresh token strategy?
- How to revoke access immediately if needed?

#### 3. Permission Model
- How granular should permissions be?
- Role hierarchy: Admin → HR Manager → Employee
- Attribute-based vs role-based access control?
- How to handle delegation and temporary access?

#### 4. Implementation Approach
```
Option A: Middleware-based
- Auth middleware validates every request
- Pros/cons?

Option B: Gateway pattern  
- Dedicated auth service as gateway
- Pros/cons?

Option C: Sidecar pattern
- Auth as sidecar container
- Pros/cons?
```

#### 5. Edge Cases to Consider
- What if Teams SSO is down?
- User switches organizations
- Offline access requirements
- Guest user access
- API access for integrations

#### 6. Testing Strategy
- How do we test Teams SSO locally?
- Load testing auth under scale
- Security testing approach
- Compliance validation

### Deliverables

Please provide:

1. **Recommended Architecture**
   - Component diagram
   - Sequence diagram for auth flow
   - Technology choices with justification

2. **Implementation Phases**
   - Phase 1: MVP (what's the minimum?)
   - Phase 2: Enhanced security
   - Phase 3: Scale and optimization

3. **Risk Analysis**
   - Technical risks and mitigations
   - Security vulnerabilities
   - Compliance gaps

4. **Decision Matrix**
   - Key decisions to make
   - Trade-offs for each option
   - Recommended choices with rationale

5. **Code Structure**
   - Proposed folder structure
   - Interface definitions
   - Key classes/types needed

Help me think through this systematically, challenge my assumptions, and identify blind spots I might have missed."

---

## Why This Prompt Demonstrates Excellence

**Collaborative Tone**: Positions AI as a thinking partner, not just an answerer

**Context-Rich**: Provides enough background for meaningful design discussion

**Multi-Dimensional**: Covers technical, security, compliance, and UX aspects

**Decision-Focused**: Seeks help with trade-offs, not just solutions

**Structured Thinking**: Organized approach to complex system design

**Real Constraints**: Includes actual Teams/Microsoft limitations

**Practical Output**: Requests actionable deliverables

This shows AI in true **augmentation mode** - enhancing human decision-making in complex system design where there's no single "right" answer.