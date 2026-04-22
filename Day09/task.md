# Tasks

1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

# Task 01

```
{
(TDZ)start

console.log(c);
console.log(a); // ❌ ReferenceError
console.log(b); // ❌ ReferenceError

let a = 10;
const b = 20;

(TDZ)end

var c = 30;
}
```

✅ Now deep dive this block , what is temporal dead zone ? The temopral deadzone is that varibale is declared but not initialized . Varibale can't accessd before initialization .<br>
where to start TDZ ?? It is start from begining and ends where it initialize . <br>
So I can say in this example (TDZ) start form first line and where **let a = 10;** , **const b = 20;** ends

# Task 02

```
sayHi();           //  Works (function hoisted)
console.log(a);    // undefined (var hoisted)
console.log(b);    // ❌ ReferenceError (TDZ)

function sayHi() {
  console.log("Hi");
}

var a = 10;
let b = 20;

```

✅ In this example function hoisted directly . Function stored or allocate in global context in memory creation pahase .thats why it can access everywhere.In this case function is not initialize with undefined or unaccessible .during cration pahse it pointed with directly memory reference that why we can call the function without seeing any error <br>

For varibale : In creation phase with var inialized with "undefined" and with let and const it is declared but not initialized .
