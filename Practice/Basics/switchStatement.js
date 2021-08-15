const number = 4;

switch (number) {
  case 0:
    console.log("It is Zero");
    break;
  case 1:
  case 2:
    console.log("It is Small");
    break;
  case 3:
  case 4:
    console.log("It is medium");
    break;
  case 5:
    console.log("It is large");
    break;
  default:
    console.log("Try again");
}
