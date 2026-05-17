# state management
while sharing the state...we have an issue called prop drilling issue

# context API
  -create context object(pipeline)
  -add state to context onject(watering the pipeline)
  -set this  context to their paarent
  -consume the context from the component

createContext() → Creates a global data container
Provider → Makes the data available to all child components
value={{ counter, changeCounter }} → Shares state + functions
Any component can access this using:

# advanced statemangement with zustand
