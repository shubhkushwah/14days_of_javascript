// _____________ Operators in JS _____________

// Arithmatic Operators 
// +, -, *, /

// let a = 5;
// let b = 2;

// console.log(a + b); // Addition
// console.log(a - b); // Subtraction
// console.log(a * b); // Multiplication
// console.log(a / b); // Division
// console.log(a ** b); // Exponentiation(ES2016)

// This two operators called Unary operator
// This is post increment
// console.log(a++); // Increment
// console.log(a--); // Decrement 

// This is pre increment 
// console.log(--a); // Increment
// console.log(--a); // Decrement



// Assignment Operator

// =	a = b	a = b
// +=	a += b	a = a + b
// -=	a -= b	a = a - b
// *=	a *= b	a = a * b
// /=	a /= b	a = a / b
// %=	a %= b	a = a % b
// **=	a **= b	a = a ** b


// Comparison Operators

// ==	equal to (It will compare data only value)
// ===	equal value and equal type (It will compare data type & value)
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator


// Logical Operators

// &&	logical and
// ||	logical or
// !	logical not




// _____________ Conditional Statements _____________

// _________ if Statement

// let day = "sunday";
// let age = 19;

// if(day === "sunday") {
//     console.log("Weekend!")
// }

// _________ if else Statement

// if(age >= 18) {
//     console.log("You are adult!")
// } else {
//     console.log("You are teenager!")
// }

// _________ else if  Statement

// if(age < 18) {
//     console.log("Junior")
// } else if (age > 45) {
//     console.log("Senior")
// } else {
//     console.log("Middle")
// }

// _____________ Ternary Operators _____________

// condition ? true output  : false output 
//           |              |
//         That is ternary operators

// let age = 27;

// let result = age >= 18 ? "You can drive" : "You can't drive"
// console.log(result);

// _____________ Practice 1
// _____________ Project_One Score_card 

// let score = prompt("Enter score: ");

// if (score >= 80 && score <= 100) {
//     console.log("Grade is: A")
// } else if (score >= 65 && score <= 79) {
//     console.log("Grade is: B")
// } else if (score >= 50 && score <= 64) {
//     console.log("Grade is: C")
// } else if (score >= 35 && score <= 49) {
//     console.log("Grade is: D")
// } else if (score >= 0 && score <= 39) {
//     console.log("You are Fail!")
// }
// else {
//     console.log("Please enter valid number!")
// }

