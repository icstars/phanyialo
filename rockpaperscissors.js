//let choices = prompt('Choose: Rock, paper, or scissors?')

//while(choices != "scissors") {
//    choices = prompt ("You lose, try again.")
//}
//    alert ("You win.")





//let choices = prompt("Rock, paper, scissors?")

//let computer = choices[Math.floor(Math.random() * choices.length)]

//while(choices != "scissors"){
//    if (userInput == computer) {
//    console.log(`User: ${userInput} | Computer: ${computer} | You tied!`)
//} else if ((userInput == "rock" && computer == "paper") || 
//    (userInput == "paper" && computer == "scissors") ||
//    (userInput == "scissors" && computer == "rock")) {
//    console.log(`User: ${userInput} | Computer: ${computer} | You lose!`)
//} else {
//    console.log(`User: ${userInput} | Computer: ${computer} | You win!`)
//}
//    choices = prompt ("You lose, try again")
//}
//alert ("You win!")





// userInput, choices array, computerInput

//let userInput = "paper"

//let choices = ['rock', 'paper', 'scissors']

//let computer = choices[Math.floor(Math.random() * choices.length)]

//console.log(computer)

//if (userInput == computer) {
//    console.log(`User: ${userInput} | Computer: ${computer} | You tied!`)
//} else if ((userInput == "rock" && computer == "paper") || 
//(userInput == "paper" && computer == "scissors") ||
//(userInput == "scissors" && computer == "rock")) {
//    console.log(`User: ${userInput} | Computer: ${computer} | You lose!`)
//} else {
//    console.log(`User: ${userInput} | Computer: ${computer} | You win!`)
//}


function RockPaperScissors() {
    let weapons = ["rock", "paper", "scissors"]
    let player = prompt("rock, paper, or scissors?")
    let computer = (weapons[Math.floor(Math.random() * weapons.length)])

    if (player === computer) {
        return "tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock") 
       ) {
            return "winner!"; 
        } else {
            return "You lose, try again"
        }
}
console.log(RockPaperScissors())
// let choiceArray = ["rock", "paper", "scissors"]

// while (weapons('') !=rps) {

//     for (choice of rps) {
//         weapons.push (choiceArray[Math.floor(Math.random() * 3)])
//     }
// }
// console.log(weapons[Math.floor(Math.random() * weapons.length)])
//     // let weapons = prompt ("Rock, paper, or scissors?")
