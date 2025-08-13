# AI Engineering Principles & Applications
## Presentation Materials for Inclusively Team

This repository contains all materials for the AI Engineering presentation, including demos, prompt templates, and the context engineering framework.

## 📁 Repository Structure

```
├── 20250811-presentation-slides.md    # Main presentation deck
├── 20250811-framework-workflow.md     # Framework documentation
├── demos/
│   ├── backend/                       # Go API demo
│   │   ├── main.go
│   │   ├── pkg/routes.go
│   │   └── internal/service/
│   ├── frontend/                      # React app demo
│   │   ├── src/App.js
│   │   └── src/components/
│   └── prompts/                       # Prompt templates
│       ├── 01-test-automation.md
│       ├── 02-backend-automation.md
│       ├── 03-ui-automation.md
│       ├── 04-code-review-augmentation.md
│       ├── 05-codebase-analysis.md
│       └── 06-design-thinking.md
└── package-for-teams/                 # Teams app (existing)
```

## 🚀 Quick Start

### Running the Demo Applications

#### Backend (Go API)
```bash
cd demos/backend
go mod download
go run main.go
# API runs on http://localhost:8080
```

#### Frontend (React)
```bash
cd demos/frontend
npm install
npm start
# App runs on http://localhost:3000
```

## 📊 Presentation Flow

### Act 1: Foundation (10 min)
- What is AI Engineering?
- The 4 Core Competencies (Delegation, Description, Discernment, Diligence)

### Act 2: Three Modes of Engagement (15 min)
- **Automation**: Test generation demo
- **Augmentation**: Code review demo
- **Agency**: Framework preview

### Act 3: Framework in Action (30 min)
- Context engineering framework introduction
- Live Teams app build
- Tool-agnostic principles

### Q&A (5 min)

## 🎯 Key Demos

### 1. Test Automation
Demonstrates prompt evolution from bad → good → great for generating unit tests.
- File: `demos/prompts/01-test-automation.md`
- Target: `ChatWithFramework` method

### 2. Code Review Augmentation
Shows AI as a thinking partner for finding bugs and edge cases.
- File: `demos/prompts/04-code-review-augmentation.md`
- Target: `FrameworkService`

### 3. Teams App Agency Demo
Live build using the context engineering framework.
- Uses your existing Teams app as the target
- Demonstrates step-by-step AI-guided development

## 🛠 The Context Engineering Framework

### Core Concept
Provide AI with rich context to enable it to work as an independent contributor.

### Components:
1. **Context Files** (PROJECT.md/CLAUDE.md)
2. **Command Templates** (plan, execute, review)
3. **Workflow Stages** (init → plan → execute → review → capture)

### Benefits:
- 3-5x faster development
- Consistent code quality
- Knowledge preservation
- Reduced cognitive load

## 📚 Prompt Templates

Each template demonstrates different levels of prompt engineering:

1. **Test Automation** - Writing comprehensive tests
2. **Backend Automation** - Adding SSO authentication
3. **UI Automation** - Creating React components
4. **Code Review** - Systematic code analysis
5. **Codebase Analysis** - Documentation generation
6. **Design Thinking** - Architecture discussions

## 🔧 Tools Mentioned

### IDEs
- Cursor
- Void

### IDE Extensions
- GitHub Copilot
- JetBrains AI Assistant (your team's current tool)
- Cline AI
- Continue

### Terminal Tools
- Claude Code
- Gemini CLI

## 📝 For Presenters

### Before the Presentation:
1. Test both demo apps are running
2. Have prompt templates ready to copy/paste
3. Ensure Teams app is accessible for final demo
4. Review the framework workflow document

### During the Presentation:
1. Start with the hook - make it engaging
2. Use live coding for demos - failures are learning opportunities
3. Emphasize principles over tools
4. Connect examples to Inclusively's specific needs
5. Leave time for Q&A and live problem-solving

### Key Messages:
- AI amplifies engineers, doesn't replace them
- Context and prompt quality determine output quality
- Start with automation, grow to agency
- You're always responsible for AI output

## 🎓 Learning Resources

- [Anthropic AI Fluency Course](https://www.anthropic.com/courses)
- [Claude Code Documentation](https://github.com/anthropics/claude-code)
- [Cursor IDE](https://cursor.sh)
- [GitHub Copilot](https://copilot.github.com)

## 💡 Next Steps for Your Team

1. **Week 1**: Practice automation (test generation, boilerplate)
2. **Week 2**: Explore augmentation (reviews, design discussions)
3. **Week 3**: Implement the framework for a real feature
4. **Week 4**: Share learnings and iterate

## 📧 Questions?

Feel free to explore the code, try the prompts, and adapt the framework to your needs. The principles are tool-agnostic and will work with whatever AI tools your team prefers.

---

*Remember: The goal isn't to use AI for everything, but to use it where it amplifies your capabilities and accelerates your work.*