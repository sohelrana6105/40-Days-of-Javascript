## 4. Use a loop inside a function and declare a varibale inside the loop .Can you access it outsid ?

### Exmaple 1

```js
function test() {
  for (let x = 0; x < 5; x++) {
    let name = "Sohel ";
  }
  console.log(name);
}
test();
```

### Exmaple 2

```js
function test() {
  for (let x = 0; x < 5; x++) {
    var name = "Sohel ";
  }
  console.log(name);
}
test();
```

In the first example I declared a varibale with let and in the second example with var . <br><br>

Loop is a block scope . var is a funtion scope and let is block scope.<br> <br>

So we can access varible with **var** only . It not possible for **let** and **const**
