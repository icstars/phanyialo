//let arr = [1,2,3,4,5]

//let lastItem = arr.slice(-1)

//let num = lastItem.slice(0)

//num = 9

//arr[arr.length - 1]

// console.log(arr)

//const arr1 = [5,6,2,9]

//arr1[1]

//console.log(arr1)
//arr1.push(arr1)

//arr.pop()
//console.log(arr1)

//Math.random()

//console.log(Math.random() * arr.length)

//console.log(arr1[Math.floor(Math.random() * arr1.length)])

//let arr = [2,4,5,6,2,4]
//let len = Math.random() * arr.length
//console.log(arr[Math.floor(len)])


//let arr = [3,6,9,12,15,18,21]

//let randomNumber = Math.floor(Math.random() * arr.length)
//console.log(randomNumber)



// FOR LOOPS
// It repeats a task or code a certain number of times 
// based on a condition.

// split() - splits a string by the specified character
// useful to split some data from a string

// join() - joins array elements between a specified character
// useful to join data together

//let arr = [1, 2, 3]

//console.log(arr.join(''))


//let str = 'coallain'
//console.log(str.split('a'))


// Traditional //
// 1. initializer 2. condition 3. iterator


//for (let i = 0; i < arr.length; i++) {
//    console.log(i)
//}


//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
//}



// for of loop

//for (char of arr) {
//    console.log(char)
//}

//let string = 'Phanyia'
//for (char of string) {
//    console.log(char)
//}


// while loop

//let j = 0
//while (j < 5) {
//    j++
//    console.log(j)
//}


//let word = 'bye'
//let attempts = 0
//let arr = []
//let characters = 'abcdefghijklmnopqrstuvwxyz'
//let charArray = characters.split('')


//while (arr.join(``) != word) {
//    arr = []
//    for (char of word) {
//        arr.push()
//    }
//}

//console.log(charArray)

//let arr = []
//let characters = ('collin', 2, 3, 4, 5)

//while (arr.join(``) != word) {
//    arr=['collin', 2, 3, 4, 5]
//    for (char of word) {
//    }
//}

//console.log(characters)


//while (arr.join(``) != word) {
//    arr = []
//    for (char of word) {
//    arr.push(charArray[Math.floor(Math.random() * charArray.length)])
//    }
//    console.log(arr.join(``))
//    attempts++
//}

 //console.log(`Number of attempts: ${attempts}`)


//let numbers = [4,1,10,100,32,5]

//for (let i = 0; i < numbers.length; i++) {
//    console.log(i)
//}

//const arr = ['collin',2,3,4,5]
// for (let i = 0; i <arr.length; i++) {
//    console.log(arr[i])
// }


//let p = 0
//while (p < 5) {
//    p++
//    console.log(p)
//}


//const arr = ['collin', 2, 3, 4, 5];

//let i = 0;
//let text = "";
//while (arr[i]) {
//    text += arr[i] + "<br>";
//    i++;
//}

//console.log(arr[i])

//let array = [1,2,3]
//while()



////conditionals
///allows you to specify different actions based on whether a 

//let y = "Hello World";
//console.log(y);

//y = "Hello i.c. stars";
//console.log(y);

//console.log(y === "Hello i.c. stars");


//let x;
//console.log(x);

//const array = ['Lucycan', 'Collin'];
//for(element of array){
//console.log(element)
//}

//if (y) {
//    console.log("this code block will execute");
//}

//sometimes we want to just check if a variable has a value
// 'x' doesn't have a value, so the code "this code block will execute" won't run
//if (x) {
//    console.log("this code block will execute")
//}

// else{} runs if the variable isn't true.

//if (x) {
//    console.log("this code block will execute")
//} else {
//    console.log("this is a flase block");
//}


/// this is to compare
// if y is truthy, then the 'if' statement will execute first block
// if y is falsy, then the 'else' state will execute the second block
//if(y === "Hello i.c stars"){ 
//    console.log("this is true");
//} else {
//    console.log("This is false");
//}


/// to evaluate more than just two options
// this will console log 0, 1, 2
//let ranNum = Math.floor(Math.random() * 3);
//console.log(ranNum);

//if(ranNum === 0) {
    /// something happens here
//    console.log("zero is your random Number")
//}else if (ranNum === 1) {
    /// something happens here
//    console.log("One is your random Number")
//}else if (ranNum === 2) {
    /// something happens here
//    console.log("two is your random Number")
//}


/// logical and operator

//if(ranNum === 0 && y) {
//    console.log("Both these expression have to be truthy for this code block to run")
//} else {
//    console.log("one or both expressions are false")
//}


/// logical or operator

//if (ranNum ===0 || ranNum === 1) {
//    console.log("only one of these needs to be truth")
//}    else {
//        console.log("everything else here needs to be false")
//    }





// this will be falsy because ranNum === 0 and 0 = falsy
//if (ranNum === 0 && ranNum) {
//    console.log("this is true")
//} else if { 
//    console.log("this is partially true")
//} else {
//    console.log("this is wrong")
//}


//if (ranNum === 0) {
//    console.log(y);
//    console.log(x);
//    let staff0 = "lucycan";
//    console.log(staff0);
//} 
//else if (ranNum === 1) {
//    let staff1 = "collin";
//    console.log(staff1);
//} else if (ranNum === 2) {
//    let staff2 = "mark";
//}

//console.log(staff0) /// expected outcome



//debugger;
//let i = "Hello"
//console.log(i);

//let dudes = ["lucycan", "collin", "mark", "cortez", "will"]
//console.log(dudes);
//console.log(dudes[1]);


//for (let j = 0; j < dudes.length; j++) {
//    console.log(dudes[j]); 
//    if(dudes[j] === "will") {
//        console.log(`hello, ${dudes[j]}. How are you?`)
//    }else {
//        console.log(`${dudes[j]}`);
//    }
//}


//let name = "phanyia"
//let age = 31
//let sentence = (`Hi, my name is ${name} and I am ${age} years old.`)
//console.log(sentence)

//let j = 0;
//while (j<5) {
//    j++
//    console.log(j)
//}


// function - a reusable piece of code that you can execute anywhere in your program

function addNumbers(a,b) {
    return a + b
}

let result = addNumbers(5,5)

let result2 = addNumbers(10,4)
let result3 = addNumbers(9,9)

console.log (result, result2, result3)
