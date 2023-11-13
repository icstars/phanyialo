//variables - container for data to be used
//  for later


//  let - are mutable / values that can change
let number = 15

number = 10

console.log(number)

// console.log is putting it into the consoles

// const / immutable / cannot change
const name = 'Collin'

// 'Collin' - a string, boolean, numbers
// because it's on the right side of the '='

// name = 'Vince'

// var - won't really use

var number2 = 0 

number2 = 10

//  Data Types

// Number/integer
let x = 2

let y = 2.5

let z = x + y 

let b = 1000000

console.log(2**4)

// 2**4 means 2 to the power of 4. this is used
// for gaming 

// String - sequence of characters
// '', "", ``
const name2 = "You're"

console.log(name2)

// Concatenation - adding two strings together
let sentence = 'hi'
let sentence2 = 'bye'
let sentence3 = sentence+sentence2
let sentence4 = sentence + ' ' + sentence2
let sentence5 = sentence + sentence2
let sentence6 = `Hi, my name is PhaNyia`
// ${} - template literal - always use bat tics
let sentence7 = `Hi, my name is PhaNyia. ${sentence2}`

console.log(sentence3)
console.log(sentence4)
console.log(sentence5)
console.log(sentence6)
// ${} - template literal - always use bat tics
console.log(sentence7)

let o =200

let s = `${o}`

let num = '20,000'

let num2 = 20

console.log(num + num2)

const num3 = 10

console.log(num3) // prints to the console

// Booleans

// Truthy - anything with value
// 1
// 'Great' - a string
// True

// Falsy - undefined; no value
// 0
// ' ' - empty string
// false
// undefined
// null

// console.log(Boolean()) - can let you know if
// something is true or false
// negative numbers will still be a truthy
console.log(Boolean(-1))


let sentence8 = `Hi, my name is ${name} and I am ${num3}` 




// what is an array ? - a list of data
let emptyArr = []
console.log(emptyArr);
const lengthOfEmptyArray = emptyArr.length;
console.log(lengthOfEmptyArray);

const mixArr = [1, "Collin"]
console.log(mixArr)

const name4 = "Lucycan";

const nameArr = ["Lucycan", "Collin", "Mark"];
console.log(nameArr);
const lengthOfNameArr = nameArr.length;
console.log(lengthOfNameArr); 

const hello = `Hi, my name is ${nameArr[1]}.`;
console.log(nameArr[1])


// submitting form
nameArr.push("Cortez");
nameArr.push("Romeo")
console.log(nameArr);

// grabs the most recent submission so it will grab "Romeo"
console.log(nameArr.pop());


// push() - this will place each one on the array

const values = ['a', 'b', 'c'];
values.push('d', 'e', 'f');
console.log(values)

// pop() - this will pop off the last value

const last = values.pop();
console.log(values, last);


// shift() - this will kick first element out of array.
// new array will be set to 
// ['b', 'c', 'd', 'e', 'f'] "a"
const first = values.shift();
console.log( values, first);

// unshift() - this will log value to the 
// beginning of the array
// ['hello', 'a', 'b', 'c', 'd', 'e']
values.unshift('hello');
console.log(values);
