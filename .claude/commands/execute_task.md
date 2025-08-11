# Command 

Name: Execute Task
Arguments: 
- `TASK_EXECUTION_BRIEF`: file containing the task execution brief

## Execution Process

1. **Load Task Execution Brief**
   - Read the specified task execution brief file
   - Understand all context and requirements
   - Follow all instructions in the task execution brief and extend the research if needed
   - Ensure you have all needed context to implement the task execution brief fully
   - Do more web searches and codebase exploration as needed

2. **ULTRATHINK**
   - Think hard before you execute the plan. Create a comprehensive plan addressing all requirements.
   - Break down complex tasks into smaller, manageable steps using your todos tools.
   - Use the TodoWrite tool to create and track your implementation plan.
   - Identify implementation patterns from existing code to follow.

3. **Execute the plan**
   - Execute the task execution brief
   - Implement all the code

4. **Validate**
   - Run each validation command
   - Fix any failures
   - Re-run until all pass

5. **Complete**
   - Ensure all checklist items done
   - Run final validation suite
   - Report completion status
   - Read the task execution brief again to ensure you have implemented everything
   - Write execution results and summary to `05-execute-task/YYYYMMDD-EXECUTE-$TASK_NAME.md`

6. **Reference the task execution brief**
   - You can always reference the task execution brief again if needed

Note: If validation fails, use error patterns in task execution brief to fix and retry.