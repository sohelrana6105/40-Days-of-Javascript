## 6. What will be the output and why ?

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

In jvascript execution context when memory allocate , then varibale and function are stored in the memory . With let varible are declared but not inialized . It creates a temporal dead zonde until the let and const varibale are initialized with a value . That why wee can not acces a varible in temporal dead zone
