// ------------- Variables -------------

brandName = "Dell";
price = 83000;
size = 14.5;
isFollow = true;

// Javascript is a dynamically typed language, which means we don't need to adress data type of any variable and we can assign value to same variable again and again
brandName = "HP";

/* --> Rules of variable
· Variable names are case sensitive; "a" and "A" is diffrent
· Only letters, digits, underscore(_) and $ is allowed
· Only letter, underscore(_) or $ be 1st character
· Reserved words cant be variable names
*/

/* --> Naming Conventions
· brandName -> camelCase (preferred)
· brand_name -> snake case
· brand-name -> kabab case
· BrandName -> pascal case
*/

console.log(isFollow);

// --> Keywords 
// var -> Variable an be re-devlaed & undated. A global scope variable.
var name = "shubham";
var name = "shubham k";

console.log(name)


// let -> Variable can't be re-declared but can be update. A global scope variable.
// let variable can use with same name with diffrent block like -
/*
{ 
    let role = "frontend developer"
    console.log(role)
}
{ 
    let role = "website developer"
    console.log(role)
}
*/
let brand = "shubham";
brand = "mr shubham k";

console.log(brand);

// const -> Variable can't be re-declared or updated. A block scope variable.
const designation = "web developer";

console.log(designation)


// ------------- DataTypes -------------
/*
Two types data available in javascript- 
1. Primitive
    1.1 Number -> 27
    1.2 String -> "shubham"
    1.3 Boolean -> true/false
    1.4 Undefined -> default value or every data is undefined
    1.5 Null -> It is special value, which means nothing in variable
    1.6 BigInt -> Like - let x = BigInt("1234567"); output will be 1234567n
    1.7 Symbol -> Like - let x = Symbol("Hello"); output will be Symbol(Hello)
2. Non-primitive
    2.1 Objects
    2.1.1 Arrays
    2.1.2 Functions
*/

const laptop = {
    brand : "dell",
    price : 83000,
    display : 14,
    touchScreen : true,
};
// To update object key value -
laptop["price"] = laptop["price"] + 500;

console.log(laptop);

// ------- Practice 1 -------

const product = {
    name : "Parker Jotter Standard CT Ball Pen(Black)",
    rating : 7002,
    price : 270,
    offer : 5,
};
console.log(product);
typeof product

// ------- Practice 2 -------

const profile = {
    userName : "@   sde_shubham",
    post : 195,
    followers : 569000,
    following : 4,
    name : "shubham k",
    bio : "Web Developer | Frntend and Backend",
};
console.log(profile);
typeof profile