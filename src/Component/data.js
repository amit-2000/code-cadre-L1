export const data = [
  {
    id: 0,
    title: "Event Loop in Javascript",
    discription:
      "JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
  },
  {
    id: 1,
    title: "Scope in JavaScript",
    discription:
      "The current context of execution. The context in which values and expressions are visible or can be referenced. If a variable or other expression is not in the current scope, then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.",
    link: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md",
  },
  {
    id: 2,
    title: "Closure in javaScript",
    discription:
      "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.",
    link: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md",
  },
  {
    id: 3,
    title: "call() apply() bind()",
    discription:
      "call() or . apply() when you want to invoke the function immediately, and modify the context. Call/apply call the function immediately, whereas bind returns a function that, when later executed, will have the correct context set for calling the original function.",
    link: "https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb",
  },
  {
    id: 4,
    title: "Arrow function",
    discription:
      "An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations. It does not have its own bindings to this",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
  },
  {
    id: 5,
    title: "And many more.........",
    // link:""
  },
];
