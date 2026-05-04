## 3 Create a funtion with a nested funtion and log a varibale from the parent funtion .

```js
function outer() {
  console.log(name);
  function inner() {
    const name = "sohel";
  }
  inner();
}
outer();
```
