# UI Automation Demo Prompts

## Context
Adding a new React component to the frontend in `demos/frontend`

---

## 🔴 Bad Prompt
"add a dashboard"

**Why it's bad:**
- No specification of what the dashboard shows
- No design requirements
- No data source mentioned
- Too vague to implement

---

## 🟡 Good Prompt
"Create a React component that displays usage metrics for the framework. Show a chart of most requested accommodation types."

**Why it's better:**
- Clear purpose (usage metrics)
- Specific feature (chart)
- Data context (accommodation types)
- Defined scope

---

## 🟢 Great Prompt
"Create a MetricsDashboard component for demos/frontend that visualizes framework usage analytics.

Requirements:
1. Create src/components/MetricsDashboard.js with:
   - Display cards showing:
     * Total queries today
     * Most requested category
     * Response success rate
     * Average response time
   - A bar chart showing query distribution across categories
   - Use only CSS for charts (no external charting libraries)

2. Add to App.js as a third tab called 'Analytics'

3. Mock data structure:
   ```javascript
   const mockMetrics = {
     totalQueries: 156,
     topCategory: 'Workplace Accommodations',
     successRate: 98.5,
     avgResponseTime: '245ms',
     categoryDistribution: [
       { category: 'Workplace', count: 67 },
       { category: 'Communication', count: 45 },
       { category: 'Physical', count: 44 }
     ]
   }
   ```

4. Styling requirements (create MetricsDashboard.css):
   - Use the existing color scheme (purple gradient)
   - Cards should have hover effects
   - Mobile responsive (grid → stack on small screens)
   - Smooth animations on data updates

5. Component should:
   - Use React hooks (useState, useEffect)
   - Simulate real-time updates every 5 seconds
   - Show loading state initially
   - Handle error states gracefully

6. Follow the existing component patterns from FrameworkDisplay and ChatInterface

This will demonstrate how AI can quickly build production-ready UI components with proper state management and styling."

**Why it's great:**
- Complete component specification
- Mock data provided
- Styling requirements clear
- Integration points defined
- Follows existing patterns
- Includes state management
- Mobile responsiveness considered
- Educational value noted