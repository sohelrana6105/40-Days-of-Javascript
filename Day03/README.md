# 📅 Day 03 – Mastering Operators & Expressions in JavaScript

Today I learned about **Operators** and **Expressions** in JavaScript.  
Operators are the foundation of logic building in programming.

---

## What is an Operator?

An **operator** is a symbol that performs an action on values (operands).

Example:

```js
let result = 5 + 3;
```

- 5 and 3 is operand
- \+ is operator

## Operators type

- Arithmetic ( \+ , \- , \* , \/ , \*\* , ++ , -- , % )
- Assignment (= , += , -= , \*= , /= , %= ,\*\*=)
- Comparison operator ( == , === , != ,!== , > , < , >= , <= )
- logical operator ( && , || , ! )
- Nullish Coalescing Operator (??)
- Bitwise operator ( & , | , ^ , ~ , << , >>)

### Logical and nullish coalescing operator

- #### && = if first value is true or truthy then it return second value other wise first value

```
let a = 0 ;
let b = 1;
let c = 3 ;
let d = true ;
let e = false ;

console.log(a && b ); // 0
console.log( d && b ); // 1
console.log(5 && true) ;//ture
console.log(true && true); // true
console.log(false && 5); // flase

```

- ### || = Logical or is opposite of && operator

### Nullish Coalescing Operator (??)

-if left operand is null or undefined then it return right operand otherwise left operand return

```
let name = null;
let name2 = "sohel"
let text = "missing";

console.log(name ?? text) ; // missing
console.log( name2  ?? text ) ; // sohel
```

---

## Comparison between 2 objects

- object is a non-primitive value . Is stored inside the heap memory and hold a reference . Each objects holds differents reference value

```
let obj1 = { name: "Sohel" };
let obj2 = { name: "Sohel" };

console.log(obj1 === obj2); // false
```

## Bitwise operator tricky

- Shift left, add 0s on right
- Shift right, remove right bits

```
5 → 00000101
5 >> 1 → 00000010 (2)
5 >> 2 → 00000001 (1)
```
