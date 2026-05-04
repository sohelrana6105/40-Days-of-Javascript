What will be the output and explain the output ?

```js
let message = "Hello";
function outer() {
  let message = "Hi ";
  function inner() {
    console.log(message);
  }
  inner();
}
outer();
```

The will be "Hi". <br > <br>

Javascript follows scope chain. It find a varbile first in local scope . If variable not exist in local scope then it goes to the parent scope . It runs untill it find a variable ,It finish when global scope come.
