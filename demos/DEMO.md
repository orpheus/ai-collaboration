10-15 Minute Cursor Demo Plan: AI Automation & Augmentation with 4D Framework

Part 1: Cursor Basics & Delegation (2 min)

1. Open Cursor with the demo project
   - Show basic interface: file explorer, editor, AI chat panel
   - Explain Cursor as an AI-powered IDE that acts as both tool and thinking partner
   - 4D: Delegation - "We're deciding what AI should automate vs. augment"
2. Demonstrate basic commands
   - Cmd+K for inline edits (automation)
   - Cmd+L for chat (augmentation/thinking partner)
   - Tab for autocomplete

Part 2: AI as Thinking Partner - Augmentation (3 min)

3. Explore existing codebase using Cmd+L
   - 4D: Description (Process) - "Let me guide the AI's thinking process"
   - Ask: "Analyze the architecture of this success enablers app and suggest what new feature would demonstrate
   accessibility best"
   - 4D: Discernment - Evaluate AI's understanding and suggestions
4. Collaborative design
   - Discuss adding a "Framework Statistics" API endpoint
   - 4D: Description (Product) - Define clearly what we want: "Create an endpoint that returns statistics about
   accommodation categories"
   - Let AI suggest implementation approach

Part 3: AI as Tool - Automation (5 min)

5. Create new backend endpoint /frameworkStats
   - Use Cmd+K in pkg/routes.go:55 to add new route
   - 4D: Description (Performance) - "Be concise, follow existing patterns"
   - Let AI generate the endpoint code
6. Add service method in internal/service/framework_service.go
   - Cmd+K to create GetFrameworkStats() method
   - 4D: Discernment (Process) - Check AI's logic for counting categories
7. Create frontend component StatsDisplay.js
   - New file in src/components/
   - 4D: Description (Product) - "Create a React component that displays framework statistics as cards"
   - Use Cmd+K to generate full component with styling

Part 4: Integration & Verification (3 min)

8. Integrate component into App.js
   - Add new tab for "Statistics"
   - 4D: Discernment (Product) - Verify the integration matches existing patterns
   - Use Cmd+K to add import and tab logic
9. Run and test
   - Terminal: cd demos/backend && go run main.go
   - New terminal: cd demos/frontend && npm start
   - 4D: Diligence - Take ownership, verify it works

Part 5: Refinement & Wrap-up (2 min)

10. Debug with AI assistance (if needed)
    - Use Cmd+L to troubleshoot any CORS or connection issues
    - 4D: Discernment (Performance) - Judge if AI's debugging approach is logical
11. Polish with human judgment
    - Quick CSS adjustments
    - 4D: Diligence - Human makes final aesthetic decisions
12. Demonstrate working feature
    - Show all three tabs functioning
    - Statistics displaying real data

Key Teaching Points Throughout:

- Automation moments: "Notice how AI handles the boilerplate"
- Augmentation moments: "Here I'm using AI as a thinking partner"
- 4D Framework callouts: Reference specific competencies as you use them
- Human expertise: "I'm applying domain knowledge here to guide the AI"

Closing (30 sec)

13. Recap 4D Framework application:
    - Delegation: We chose what to automate vs. augment
    - Description: We clearly communicated our needs
    - Discernment: We evaluated AI outputs critically
    - Diligence: We took ownership of the final product
14. Key takeaway: "Cursor + 4D Framework = Effective AI partnership where you remain the expert architect while AI
    accelerates implementation"
