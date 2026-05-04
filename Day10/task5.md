## 5. Write a function that tries to acces varibale declared with another funtion

```js
function test() {
  function inner() {
    var name = "sohel";
  }
  inner();
  console.log(name);
}
test();
```
