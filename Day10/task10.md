## 10 . What will be the output and why ?

```js
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}
const reduce = counter();
reduce();
reduce();
```

**counter** is a higher order funtion because
it takes a funtion and return it .<br> <br>

The output will be **-1 and 2** .<br><br>

We can see that After finishing a funtion execution inner funtion can remember varibales or lexical sope Because of **closure**.
