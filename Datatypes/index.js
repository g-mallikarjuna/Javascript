//Primitive data type
//String, number, bigInt, undefined, null
//complex data type
//array, object

//String
let name = "John Doe";
let age = "21";
age = 21;
const address = "H/No 67-2";
console.log(name);
console.log(age);
console.log(address);

//numbers
let phoneNumber = 556519891;
let serialNumber = 345451;
console.log(phoneNumber);
console.log(serialNumber);

//bigInt;
let bigNumber = 2312312n;
console.log(bigNumber);

let something1 = undefined;
let something2 = null;
console.log(something1);
console.log(something2);

//arrays 
const array = ["apple","banana","pineapple"];
console.log(array);

//loop;
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

//objects
const person1 = {
    firstName: "Bat",
    lastName: "Man",
    age: 34,
    occupation: "Business Man",
    greetings: function(){
        console.log(`Good Morning ${this.firstName} ${this.lastName}`);
    },
    hobbies: ['Buying Cars','Partying']
}

console.log(person1);
console.log(person1.age);
person1.greetings();

//typeOf

console.log(typeof name);
console.log(typeof phoneNumber);
console.log(typeof bigNumber);
console.log(typeof something1);
console.log(typeof something2);
console.log(typeof array);
console.log(typeof person1);

//instanceof
console.log(array instanceof Array);

