let marks = 65;

if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
}

switch (true) {
  case marks >= 80:
    console.log("A");
    break;

  case marks >= 70:
    console.log("B");
    break;
  case marks >= 60:
    console.log("C ");
    break;

  default:
    console.log("Fail");
    break;
}
