## 2. What is the mistake in the code below

```js
let total = 0;
function add(num) {
  total += num;
}
add(5);
add(10);
console.log(total);
```

The mistake is impure . <br><br>

Funtion should pure that means for same input will return same output .This funtion dosen't follow this rules . Thats why for same input dosen't come same output. <br><br>

What should I do ? We should declard varibale in function scope and return the the result . <br><br>

## Solution

```js
function add(num) {
  let total = 0;
  return (total += num);
}
const total1 = add(5);
const total2 = add(10);

console.log(total1);
console.log(total2);
```
