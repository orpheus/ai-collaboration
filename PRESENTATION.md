**System Prompt:** You are an expert technologist, consultant, and presenter. Help me to create a powerful, yet simple 
presentation for a small tech company that emphasizes practical skills and learning. Aid me in organizing my thoughts
and ideas into a visually beautiful, yet simple presentation view. Guide me on what slides should be included, 
the content of those slides, and the sequencing of the slides for the most effective communication and explanation. Do 
not immediately create and propose examples; but work with me, one question at a time, to develop out the overall goal
and vision of the presentation. Consider the current material and information I have and help me work out what steps
to take next. Once you understand what I want and what I have, let's refine the proposal and then create a task list
for next steps with the goal of completing the presentation. Challenge me on what should or should not exist in the slides.
Think very deeply about the User Prompt to best help me organize my thoughts and slides. 

**User Prompt:** I'm creating a presentation to walk a small technology startup company focused on HR Automation for providing disability 
accommodation and business metrics around these on AI Engineering Principles & Applications. To prep for the presentation, 
I took an Anthropic course on AI Fluency. You can find someone else's summary of it here: https://medium.com/@ameet/3-things-i-learned-about-ai-fluency-from-anthropic-12ae781b9b8c
Please read, review, and summarize the learning so that you have context to help me.

**My goals for the presentation:**

1. Teach: "What is AI Collaboration"
2. Teach: "How to implement AI Collaboration Principles [that are tool agnostic]"
3. Show: The power of AI in action via these Principles
4. Show: Tips, tricks, and workflows along the way
5. Deliver: A usable framework for ai context engineering that the team could immediately get value out of
6. Demo: The framework in use with a practical example related to the company's current engineering goals

**My current thoughts:**

**Learnings**

- I want to share my learning from the AI Fluency Course, including 
  - the three primary ways to engage with AI
    - Automation
      - using AI as a tool
    - Augmentation
      - using AI as a thinking partner
    - Agency
      - using AI as an independent contributor
  - the four core competencies
    - Delegation
      - understanding what work the AI should do vs. yourself
    - Description
      - communicating effectively with AI systems
    - Discernment
      - effectively and critically evaluating AI output
    - Diligence
      - taking responsibility for the AI output
- I want to briefly pedantically share the most basic knowledge of what an LLM is and how it's evolved into an agentic model
  - LLMs as stateless functions with context windows
  - LLMs starting to use chat history to gain simple 'memory'
  - LLMs starting to use RAG to get more richly related context
  - LLMs as agents, independently deciding what to do to get more richly related context
  - Note: I currently have these slides already built out, but open to feedback in terms of overall presentation design

**Demos**

- I want to show demos of the three ways to engage with AI
  - Automation
    - Writing tests for existing code in golang
    - Building a backend api/route in golang
    - Developing a UI feature/enhancement in reactjs
  - Augmentation
    - Review existing service function for bugs, edge cases, and failure modes and output an analysis report (or build test cases)
    - Analyze and explain an existing codebase and document the structure and function of the packages (use a golang application as an example)
    - Use AI as an assistant to collaborate on a system design for authentication in a Microsoft Teams App
  - Agency
    - Build a context engineering framework that aids an engineer in the planning and execution of an engineering task (done) using the four core competencies
    - Explain the thought process behind building the framework 
    - Show the framework in action by building a demo app using the context framework (set of claude code commands) one step at a time to show the thought process in action
- Tools
  - I only very briefly want to touch on tools as the team I'm presenting to is only lightly familiar with what's available
    - A Couple of them use JetBrains AI Assistant and another has tried Cursor
  - I want to demo using Cursor and Claude Code, and maybe touch on a few keynotes about the tools themselves and how to use them
    - Most likely will do this during the demo
  - But thinking also a slide on available tools and tool types may be beneficial
  - Right now I'm thinking of tools in these categories:
    - IDES
      - Cursor
      - Void
    - VS Code / JetBrains Plugins
      - GitHub Copilot
      - JetBrains AI Assistant
      - Cline AI
      - Continue AI
    - Terminal-based
      - Claude Code
      - Gemini CLI

**What I have so far**

- Slide decks for LLM Basics
- One slide with a logos of the tools listed above
- A set of custom-built claude code commands (see `~/.claude/commands`) for the agency demo (context engineering framework)
- A fully built demo (using the context engineering framework) for a Microsft Teams App which I have tested works in Teams
  - the goal is to build it again live using the same commands/prompts, but have the fully built one for quick demo-purposes

**What I still need**

- code examples for the automation and augmentation demos, including a backend and frontend example
  - Backend
    - Create a minimal golang api using gin with no other external dependencies
      - store in /demos/backend
    - Create two api routes in /pkg/routes.go
      - GET /successEnablersFramework
      - GET /chatWithFramework
    - Create a FrameworkService struct with two methods
      - GetSuccessEnablersFramework
      - ChatWithFramework
    - Create a DbRespository interface which the Service struct uses for any db calls, but do not create a db implementation
    - In the ChatWithFramework method, mock sufficient code logic that we can demo creating unit tests for it later on
      - The purpose of this mock function is to provide a chat interface that fetches success enablers from the framework db and respond to user questions
  - Frontend
    - the most minimal react application to interact with the backend described above
  - For demo-ing the following:
    - **Test Automation**: create a prompt template for me to use in the demo to add tests to the ChatWithFramework method
      - Create 3 examples of different level prompts: bad prompt, good prompt, great prompt 
    - **Backend Automation**: create a prompt template to add a new go route to the API for SSO authentication
      - Create 3 examples of different level prompts: bad prompt, good prompt, great prompt
    - **UI Automation**: create a prompt template to add a new react component to the project
      - Think of a useful example and implement it in the prompt description
    - **Code Review Augmentation**: create a prompt template for reviewing the FrameworkService for bugs, edge cases, and failure modes 
    - **Codebase Analysis Augmentation**: create a prompt template to analyze and explain an existing codebase and document the structure and function of the packages
    - **Design Thinking Augmentation**: create a prompt template to facilitate design discussion around a system design for authentication in a Microsoft Teams App
- **IMPORTANT**: 
  - an organized and thoughtful presentation layout
  - slides for the presentation


## AI Output 

The AI output a lot; this is what I ended up keeping, along with the frontend/backend demo projectss

### Presentation

**Proposed Presentation Flow (60 min)**

**Act 1: Foundation (10 min)**

1. Hook (2 min): "What if AI could be your engineering team member, not just your autocomplete?"
2. What is AI Engineering? (3 min): Brief definition, why it matters for their work
3. The 4 Core Competencies (5 min): Delegation, Description, Discernment, Diligence with quick examples

**Act 2: The Three Modes (15 min)**

4. Automation Demo (5 min): Write tests for ChatWithFramework method
5. Augmentation Demo (5 min): Code review for bugs/edge cases
6. Agency Preview (5 min): "Now imagine AI planning AND executing..." → introduce your framework

**Act 3: The Framework in Action (30 min)**

7. Framework Introduction (5 min): Show the markdown template, explain the workflow
8. Live Build: Teams App (20 min): Step-by-step using your commands
9. Tool Agnostic Note (2 min): "These principles work in Cursor, JetBrains, anywhere"
10. Wrap-up (3 min): GitHub repo, next steps, Q&A

**Buffer/Q&A (5 min)**

**Presentation Structure Ready:**

- Act 1 (10 min): Foundation & 4 Core Competencies
- Act 2 (15 min): Three engagement modes with live demos
- Act 3 (30 min): Framework in action with Teams app build
- Buffer (5 min): Q&A

**Key Features:**

- Live coding demos that address Inclusively's specific needs (Teams integration, BigQuery APIs, web scraping)
- Tool-agnostic principles that work with JetBrains AI (what your team uses)
- Practical prompt templates with clear progression
- Ready-to-run demo applications

The materials emphasize practical application over theory, perfect for your hands-on audience of developers, data scientists, and product managers. Everything is
organized to share via GitHub after your presentation.
