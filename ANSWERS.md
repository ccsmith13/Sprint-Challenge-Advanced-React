- [x] Why would you use class component over function components (removing hooks from the question)?
 
 + Data fetching with class components is more intuitive than using useEffet in function components.
 + Class components are able to implement state and logic.
 + You can use React lifecycle methods inside of class components (i.e. componentDidMount). 
 + You can use props in class components.


- [x] Name three lifecycle methods and their purposes.

1. render() -- required in class components, renders components to the UI
2. componentDidMount() -- called when the component mounts, place to initiate API calls, allows use of setState
3. componentWillUnmount() -- called just before the component is unmounted and removed, can be used to call
cleanup activities like clearing fields / timers / storage 

- [x] What is the purpose of a custom hook?

+ Good way to re-use stateful knowledge. Allows you to extrat component logic into reusable functions.

- [x] Why is it important to test our apps?

+ Surfaces bugs faster
+ Reduces the risk of regressions
+ Allows us to trust the code that we wrote
+ Acts as a safety net when making changes or refactoring
+ Acts as documentation for the code
+ Encourages us to write more testable code