# Context Engineering Framework Workflow

```
[1] define_task.md  → [2?] design_task [3] refine_task.md  
      ↓                  ↓                      ↓
  [Task Req Doc   ←  Task Design Doc] ← Task Analysis Plan
      ↓                  
        ----→ [4] prepare_task.md → Execution Plan
                                         ↓
                               [5] execute_task.md
                                         ↓
                                 Execution Summary
```

## Overview
A systematic approach to working with AI that leverages the 4 D's (Delegation, Description, Discernment, Diligence) to achieve consistent, high-quality results.

---

## The Framework Components

### 1. Context Files (CLAUDE.md / PROJECT.md)
Persistent context that provides AI with:
- Project overview and goals
- Tech stack and conventions
- Coding standards
- Business domain knowledge
- Current sprint objectives

### 2. Command Structure
Organized prompts for common tasks:
- `define_task.md` - Create and document initial task requirements
- `design_task.md` - Create and document new task requirements
- `refine_task.md` - Analyze & enhance task
- `prepare_task.md` - Transform tasks into executable plan
- `execute_task.md` - Execute task plan


### 3. Workflow Stages

---

## Stage 1: Context Initialization

### Setting Up Your Project Context

Running the Claude `/init` slash command will analyze your code base and create a strong summary for you to use
```bash
claude
/init
```

Additionally, you'll want to create a `PROJECT.md` directory with more information about your specific 
project information, e.g. team practices, preferences, tech stack, sprint goal, etc.
```markdown
# PROJECT.md

## Project: Inclusively Success Enablers Framework

### Overview
Microsoft Teams application for managing disability accommodations

### Tech Stack
- Backend: Go 1.21, Gin framework
- Frontend: React 18, TypeScript
- Database: PostgreSQL
- Deployment: Azure

### Conventions
- RESTful APIs
- Repository pattern for data access
- Service layer for business logic
- Comprehensive error handling

### Current Sprint
- Implement Teams SSO
- Add accommodation request workflow
- Create analytics dashboard
```

---

## Stage 2: Task Planning: `define_task`


Running `/define_task` will output a task requirement doc that you can
fill out yourself or work with Claude to fill out.

```bash
/define_task "my task"
```

#### When to use
1. Use this if you already know what needs to be done and you have concrete requirements.
2. Use this on a design doc generated from `design_task` to transform the deisgn thinking into a task requirement doc 

#### Output
The output is a high level task with required subtasks, their descriptions, and requirements.

```markdown
# Task: $TASK_NAME

## Subtasks

1. <subtask_1>
2. <subtask_2>
3. <subtask_3>
4. ...

### Subtask 1: <subtask_1>

**Description** 

**Requirements**
 
- <requirement_1>
```

---

## Stage 3: Task Design: `design_task`


Running `/design_task` will lead you through a design thinking exercise on your task and output the design thoughts

```bash
/design_task "some task that needs more thinking"
```

#### When to use

1. Use this when you need to explore an unknown topic or think through design decisions

#### Output

```markdown
# Design: {PROBLEM_AREA}

## Problem Statement
{1-2 sentence synthesis from Phase 1}

## Solution Approach
{Brief description of chosen direction}

## Unknowns Requiring Investigation
- {List items that need spikes or research}

## Proposed Task Structure
### Subtasks
1. {subtask_1}
2. {subtask_2}
3. {subtask_3}

### Task Requirements
{For each subtask, 2-3 concrete requirements}

## Next Step
Run: `new_task "{PROBLEM_AREA}_implementation" template`
Then copy subtasks and requirements from this design document.
```
---

## Stage 4: Task Refine: `refine_task`


Running `/refine_task` will run different analyses on your task requirement doc and enrich the document.
Essentially, it performs additional thinking for you and makes sure your tasks are actionable.

```bash
/refine_task "<TASK_REQUIREMENT_DOC>
```

#### When to use

1. Use this either during or after tasks requirmenet planning to enrich the data with a delegation analysis and SMART analysis 

#### Output

Updates the existing <TASK_REQUIREMENT_DOC>

---

## Stage 5: Prepare Task: `prepare_task`

Running `/prepare_tasks` will turn your requirements into an actionable plan an AI can execute and verify 

```bash
/prepare_task "<TASK_REQUIREMENT_DOC>"
```

#### When to use

1. Use this after you've refined your task doc and are preparing for execution

#### Output

Outputs a new execution brief file

```markdown
# Execution Brief for TASK_NAME

## Subtask: SUBTASK_NAME
**Inputs:**  
**Outputs:**  
**Constraints:**  
**Plan:**  
1. ...
```
---

## Stage 6: Executee Task: `execute_task`

Running `/execute_task` will execute the task execution brief. This is where the magic happens. 

```bash
/execute_tasl "<TASK_EXECUTION_BRIEF>"
```

#### When to use

1. Use after you've created a task execution brief doc on your task requirement doc

#### Output

Outputs an execution summary

---

## Tips for Success

### 1. Start Small
- Begin with simple automation
- Build confidence
- Learn AI's capabilities

### 2. Iterate on Prompts
- First attempt rarely perfect
- Refine based on output
- Save successful patterns

### 3. Maintain Context
- Keep PROJECT.md updated
- Document decisions
- Share knowledge with team

### 4. Trust but Verify
- Always review output
- Run tests
- Check edge cases
- Validate security

### 5. Learn from Interactions
- What works well?
- What causes confusion?
- How can prompts improve?

---

## Common Pitfalls to Avoid

### ❌ Over-Delegation
Don't delegate critical thinking or architecture decisions

### ❌ Under-Specification
Vague prompts = vague results

### ❌ Skipping Validation
Always verify AI output before production

### ❌ Context Drift
Keep context files current with project evolution

### ❌ Tool Lock-in
Focus on principles, not specific tools

---

## Getting Started Checklist

- [ ] Create PROJECT.md for your codebase
- [ ] Set up command templates folder
- [ ] Try framework on small feature
- [ ] Document what works
- [ ] Share learnings with team
- [ ] Iterate and improve

---

## Conclusion

Thank you!