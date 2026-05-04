## 9 . What will be the output and why ?

```js
let x = "Global";
function outer() {
  let x = "Outer ";
  function inner() {
    let x = "Inner ";
    console.log(x);
  }
  inner();
}
outer();
```

The will be "Inner". <br > <br>

Javascript follows scope chain. It find a varbile first in local scope . If variable not exist in local scope then it goes to the parent scope . It runs untill it find a variable ,It finish when global scope come.
