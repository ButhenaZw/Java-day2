let age= 27;
if (age>18){
    document.writeln("You are an adult" + "<br>") 
}
////////////////////////////////////////
let score = 45;
if (score<50){
    document.writeln("You failed the test" + "<br>")

}
//////////////////////////////////////////
let name = "John";
if (name == "John"){
    document.writeln("Hello, John" + "<br>")
}
///////////////////////////////////////////
let day = "Monday"
if (day != "Saturday" && day != "Sunday"){
    document.writeln("It's a weekday" + "<br>")

}
////////////////////////////////////////////
let num = 4;
if (num % 2 ==0){
    document.writeln("The number is even" + "<br>")
}
/////////////////////////////////////////////
let char = "a";
if (char = "letter"){
    document.writeln("It's a letter" + "<br>")
}
////////////////////////////////////////////////
let list =[1, 2, 3];
if (list = "array"){
    document.writeln("It's an array" + "<br>")
}
////////////////////////////////////////////////
let x = 5;
if (x > 0){
    document.writeln("x is a positive number" + "<br>")
}
////////////////////////////////////////////////
let y = -5;
if (y < 0){
    document.writeln("y is a negative number" + "<br>")
}
/////////////////////////////////////////////////
let z = 9;
if (z % 3 ===0 ){
    document.writeln("z is a multiple of 3" + "<br>")
}
//////////////////////////////////////////
let GPA = "A";
switch (GPA){
    case "A":
        document.writeln("Excellent");
        break;
        case "B":
            document.writeln("Very Good");
            break;
            case "C":
                document.writeln("Good");
                break;
                case "F":
                    document.writeln("Failed");
                    break;
                    default:
                        document.writeln("none" + "<br>")
}
//////////////////////////////////////////////////////
let month = "January";

if (["December", "January", "February"]) {
    document.writeln(`${month} is a winter month`);
} else if (["March", "April", "May"]) {
    document.writeln(`${month} is a spring month`);
} else if (["June", "July", "August"]) {
    document.writeln(`${month} is a summer month`);
} else if (["September", "October", "November"]) {
    document.writeln(`${month} is an autumn month`);
} else {
    document.writeln("${month} is not a valid month");
} + "<br>"
////////////////////////////////////////////////////////////
let password = "mypassword123";
if (password.length >= 8) {
    document.writeln("Your password is strong");
} else {
    document.writeln("Your password is too short");
}
/////////////////////////////////////////////////////////////
var adminEmail = "admin@admin.com";
var adminPassword = "12345Admin";
var enteredEmail =("Enter your email:");
var enteredPassword = ("Enter your password:");


if (enteredEmail !== adminEmail) {
  document,writeln("Incorrect email");
} else {
  if (enteredPassword !== adminPassword) {
    document.writeln("Incorrect password");
  } else {
    document.writeln("Welcome");
  }
}
////////////////////////////////////////////////////////////////
function isValidNumber(input) {
    // Check if input is not NaN when coerced to a number
    if (!isNaN(input) && input.trim() !== "") {
      document.writeln(`${input} is a valid number`);
    } else {
      document,writeln(`${input} is not a number`);
    }
  }
  isValidNumber("11");    // "11 is a valid number"
  isValidNumber("19");    // "19 is a valid number"
  isValidNumber("xyz");   // "xyz is not a number"
  isValidNumber("17.5");  // "17.5 is a valid number"
  isValidNumber("21F");   // "21F is not a number"
  isValidNumber("  ");    // "   is not a number"
  isValidNumber("12 ");   // "12 is a valid number"
  ////////////////////////////////////////////////////
