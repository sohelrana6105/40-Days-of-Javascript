## 1 . what will be the output of the following code and why ?

```js
let user = " Alice ";
function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();
```

In this example we can see two **funtion** named **outer** and **inner** .
we can see a variable named **user** in the global scrope declard with user **let** . Inside the outer funtion also has varibale **user** with let . We **console** user inside inner function.
<br>
<br>
The **output** will be "Bob" . Because of Scope .
<br>
Same varbiable has in the global scope and inside the funtion scope . Now we have to understand how scope works ? In javascript first priotirize own local scope , If no varibale match then Its move to one level up . This chain dosen't finish untill reach the global scope . Thats why in this example js already found in his local scope , so dosen't need to go global varbiale or lovel up .
