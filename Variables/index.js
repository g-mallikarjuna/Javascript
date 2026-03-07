//var -- older version, it is a global scope and function scope 'mutable'
//automatically JS it above the js code file
var name = "Javascript";
var age = 36;
console.log(name);
console.log(age);

//let --newer version, it is block scope or local scope 'mutable'
let userName = "John Doe";
let userAge = 21;
console.log(userName);
console.log(userAge);

//const --newer version, it is block scope or local scope 'unmutable'
//intializing is important when variable declaration 
const secret = "Something secret";
//secret = 21 can't be reassign
console.log(secret);
