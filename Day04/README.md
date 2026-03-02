# Conditional Control Flow

- if
- if...else
- else
- switch ... case
- ternary (? :)

## ternary (? :)

- Simple true/false decision
- One-line assignment

```
let status = isLoggedIn ? "Welcome" : "Login First";
```

## switch ... case

- Checking one variable
- Matching against multiple fixed values
- Cleaner than many else if

```
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

## if...else

- complex conditions

```
if (marks >= 80 && attendance >= 75){
    console.log("eligible")
}
```
