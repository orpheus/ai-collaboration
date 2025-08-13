# Test Automation Demo Prompts

## Context
Testing the `ChatWithFramework` method in `demos/backend/internal/service/framework_service.go`

---

## 🔴 Bad Prompt
"write tests"

**Why it's bad:**
- No context about what to test
- No specification of test framework
- No coverage requirements
- Ambiguous scope

---

## 🟡 Good Prompt
"Write unit tests for the ChatWithFramework method in Go using the standard testing package. Test the main functionality and error cases."

**Why it's better:**
- Specifies the method to test
- Mentions the language and framework
- Requests error case coverage
- Clear scope

---

## 🟢 Great Prompt
"Create comprehensive unit tests for the ChatWithFramework method in demos/backend/internal/service/framework_service.go. 

Requirements:
1. Use Go's standard testing package
2. Create a mock DbRepository for testing
3. Test these scenarios:
   - Empty query input (should return error)
   - Query with less than 3 characters
   - Keyword matching for each category (accommodation, communication, physical)
   - Help/general queries
   - Unrecognized queries
   - Long queries (>100 characters)
   - Repository logging failures (should not fail the request)
   - Nil repository handling

4. Use table-driven tests where appropriate
5. Aim for >80% code coverage
6. Include descriptive test names following Go conventions (Test_MethodName_Scenario_ExpectedOutcome)

The tests should verify both the response content and error states."

**Why it's great:**
- Complete context with file path
- Specific test scenarios based on actual code logic
- Testing best practices (mocking, table-driven tests)
- Coverage expectations
- Naming conventions
- Clear success criteria