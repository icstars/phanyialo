/// argument
//function log(text) {
//    console.log(text)
//}
//log("phanyia")


//function log (a,b) {
//    console.log(a + b)
//}
//log("phanyia", "lo")


/// return statement
//function log (a, b) {
//    return a + b
//}

//let name = log("phanyia", "lo")
//console.log (name)


//function addStrings (str1, str2) {
//    return str1 + str2
//}
//let combination = addStrings ("hi", "bye")
//console.log(combination)


//function addNums(num, num2, num3) {
//    return num + num2 + num3
//}

//let combo = addNums("phanyia", 5, 10)
//console.log(combo)


/// regular function
// function name () {}


/// function expression
// let name = function (a,b) {}
// name (1, 5)


/// arrow function
// let name () => {}
// example
// let name = (a,b) => {return a + b}



/// making a function looping through an array

//function loopArray(arr) {
//    for(char of arr) {
//        console.log(char)
//    }
//}

//let nums = [1, 2, 3, 4]
//loopArray(nums)

//let names = ["phanyia", "hlichi", "lo"]
//loopArray(names)



//// vending machine

function vendingMachine (money, item) {
    let snacks = ["pepsi", "Hersheys", "snickers", "reeces", "cheetos", "gatorade", "sprite"]
    
    if (money === "$2.00") {
        for (snack of snacks) {
            if (item === snack) {
                return snack 
            }
        }
        return "Doesn't exist"
    }
}

console.log(vendingMachine("$2.00", "Hersheys"))