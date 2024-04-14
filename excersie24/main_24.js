var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var furits = ["apple", "banana", "mango"];
// Tests for equality and inequality with strings
console.log("apple is equal to apple");
console.log(apple == "apple");
console.log("apple is not equal to apple?");
console.log(apple != "apple");
// Tests using the lower case function
console.log("APPLE is equal to apple after converting yo lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("APPLE is not equal to apple after converting yo lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("ten is equal to 20?");
console.log(ten == 20);
console.log("ten is not equal to 20?");
console.log(ten != 20);
console.log("ten is greater than 5?");
console.log(ten > 5);
console.log("twenty is less than 10?");
console.log(twenty < 10);
// greater than or equal to
console.log("ten is greater than or equal to 9");
console.log(ten >= 9);
// less than or equal to
console.log("twenty is less than or equal to 10?");
console.log(twenty <= 10);
// Tests using "and" and "or" operators
console.log("twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("twenty is  equal to 10 and twenty is greater than 10?");
console.log(twenty == 10 && twenty > 10);
console.log("twenty is greater than 50 or 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("twenty is greater than 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);
// • Test whether an item is in a array
console.log("mango include in my fruits array");
console.log(furits.includes("mango"));
console.log("mango not include in my fruits array");
console.log(!furits.includes("mango"));
