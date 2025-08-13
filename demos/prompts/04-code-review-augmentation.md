# Code Review Augmentation Demo Prompt

## Context
Using AI as a thinking partner to review the FrameworkService for bugs, edge cases, and failure modes

---

## Prompt Template

"Please perform a comprehensive code review of the ChatWithFramework method in demos/backend/internal/service/framework_service.go.

Act as a senior engineer and analyze the code for:

### 1. Bugs and Logic Errors
- Identify any bugs in the current implementation
- Check for off-by-one errors, null pointer risks, type mismatches
- Verify the logic flow matches the intended behavior

### 2. Edge Cases and Boundary Conditions  
- What happens with extremely long queries (>1000 chars)?
- How does it handle special characters or SQL injection attempts?
- What about concurrent access if multiple users query simultaneously?
- Unicode and internationalization considerations

### 3. Failure Modes and Error Handling
- Identify all possible failure points
- Assess if errors are handled appropriately
- Are errors logged but not exposed to users inappropriately?
- Is there proper fallback behavior?

### 4. Performance Concerns
- Memory usage with large responses
- String concatenation efficiency in response building
- Potential bottlenecks or O(n²) operations

### 5. Security Vulnerabilities
- Input validation completeness
- Information disclosure risks
- Rate limiting considerations
- Authentication/authorization gaps (if applicable)

### 6. Code Quality and Maintainability
- Is the code testable?
- Are there magic numbers or strings that should be constants?
- Is the error handling consistent?
- Would this code be easy for a new developer to understand?

### 7. Missing Functionality
- Based on the method's purpose, what functionality might be missing?
- Are there obvious user needs not being met?

Please provide:
1. A severity rating for each issue (Critical/High/Medium/Low)
2. Specific line numbers where issues occur
3. Suggested fixes or improvements
4. Example test cases that would catch these issues

Format your response as an actionable code review that the development team can use to improve the code."

---

## Why This Prompt Works Well

**Comprehensive Coverage**: Addresses multiple dimensions of code quality beyond just "finding bugs"

**Structured Analysis**: Organized into clear categories that mirror real code review practices

**Actionable Output**: Requests specific line numbers and fixes, not just problems

**Security-Conscious**: Explicitly includes security in the review

**Practical Focus**: Considers real-world concerns like performance and maintainability

**Senior Perspective**: Frames the AI as an experienced reviewer, encouraging deeper analysis

This demonstrates using AI for **augmentation** - not replacing human review, but enhancing it with systematic, thorough analysis that might catch issues humans could miss.