function guessNum() {
    let playAgain = 'Yes'
    while(playAgain === 'Yes') {
        let target = Math.floor(Math.random() * 100);
        let maxTries = 6;
        for (let tries = 1; tries < maxTries; tries++) {
            let guess = prompt("Guess a number from 1-100. You have 6 attempts.");
            if (guess < target) {
                alert("Too low");
            } else if (guess > target) {
                alert("Too high");
            } else {
                alert("Yay! You got right!")
            }
        }

        alert(`You guessed the max tries already. The correct number is ${target}`);
        playAgain = prompt("Play again? Yes or No")
        if (playAgain.toLowerCase == "yes") {
            guessNum();
            return;
        } else if (playAgain.toLowerCase == "no") {
            alert("Thanks for playing!")
        
    }
}
guessNum();






// function guessNum() {
//     let playAgain = 'Yes';

//     while (playAgain.toLowerCase() === 'yes') {
//         let target = Math.floor(Math.random() * 100);
//         let maxTries = 6;

//         for (let tries = 1; tries <= maxTries; tries++) {
//             let guess = prompt("Guess a number from 1-100. You have 6 attempts.");

//             if (guess < target) {
//                 alert("Too low");
//             } else if (guess > target) {
//                 alert("Too high");
//             } else {
//                 alert("Yay! You got it right!");
//                 break; // Exit the loop if the guess is correct
//             }
//         }

//         alert(`You guessed the max tries already. The correct number is ${target}`);
//         playAgain = prompt("Play again? Yes or No");

//         if (playAgain.toLowerCase() === 'no') {
//             alert("Thanks for playing");
//             return;
//         }
//     }
// }

// guessNum()