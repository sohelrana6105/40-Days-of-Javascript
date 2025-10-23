/**expression
expression return a single vale , its evaluate with operattor (const y =1 + 2  ) . on the otherhand expression evaluate itself using = operators**/

// Arithmetic operator

let a = 10;
let b = 5;
let c = 12;

console.log(a++);
console.log(a);
console.log(++a);

// console.log(a--);
// console.log(a);

// console.log(--a);

console.log("Reminder", c % b);

const obj1 = { name: "mostafa" };
const obj2 = { name: "mostafa" };
console.log(obj1 === obj2);

console.log(obj1 instanceof Object);

console.log(`*******Logical Operator*******`);

const x = 5;
const y = 10;
const z = "";
const xx = 0;

const v1 = true;
const v2 = false;

const html = `<p> this is correct</p>`;

console.log(x && html);
console.log(z && html);
console.log(xx && html);

console.log(x || html);
console.log(xx || html);

console.log(x ?? html);

console.log(`*******Caomparison Operator*******`);

console.log(x === xx);
console.log(v2 === xx);

console.log(x !== xx);
console.log(x > y);
console.log(!!"sohel");
