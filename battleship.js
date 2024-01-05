// let p1 = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
// ]

// let p2 = [
//     [0, 0, 1],
//     [0, 0, 0],
//     [0, 1, 0],   
// ]


// function battleShip (a, b, c) {

//     if(a != 0 && a == b && a == c) {
//         alert("Hit!");
//         return true;
//     } else {
//         alert("Miss!");
//         return false;
//     }
// }

// function checkWinner(P1) {

//     P1 = prompt("player 1, choose your target")

//     // RIGHT
//     for (let row = 0; row < 3; row++) {
//         for (let column = 0; column < 3; column++) {
//             if(battleShip(p1[row][column], p1[row][column + 1], p1[row][column + 2])) {
//                 alert("Miss!");
//                 return "Miss"; 
//             }
//         }
//     }

//      // RIGHT
//      for (let row = 0; row < 1; row++){
//         for (let column = 0; column < 3; column++) {
//             if (battleShip(p1[row][column], p1[row + 1][column], p1[row + 2][column])) {
//                 alert("Miss!");
//                 return "Miss"; 
//             }
//         }
//     }

//     // DIAGONAL DOWN RIGHT
//     for (let row = 0; row < 1; row++){
//         for (let column = 0; column < 3; column++) {
//             if (battleShip(p1[row][column], p1[row + 1][column + 1], p1[row + 2][column + 2])) {
//                 alert("Miss!");
//                 return "Miss"; 
//             }
//         }
//     }

//     //DIAGONAL DOWN LEFT
//     for (let row = 0; row < 1; row++){
//         for (let column = 0; column < 3; column++) {
//             if (battleShip(p1[row][column], p1[row + 1][column - 1], p1[row + 2][column - 2])) {
//                 alert("Miss!");
//                 return "Miss"; 
//             }
//         }
//     }
// }

// function checkWinner2(P2) {

// P2 = prompt("player 2, choose your target")

// if(a != 0 && a == b && a == c) {
//     alert("Hit!");
//     return true;
// } else {
//     alert("Miss!");
//     return false;
// }
// }


//     // RIGHT
//     for (let row = 0; row < 3; row++) {
//         for (let column = 0; column < 3; column++) {
//             if(battleShip(p2[row][column], p2[row][column + 1], p2[row][column + 2])) {
//                 alert("Miss!");
//                 return "Miss"; 
//             }
//         }
//     }

//     //DIAGONAL DOWN LEFT
//     for (let row = 0; row < 1; row++) {
//         for (let column = 0; column < 3; column++) {
//             if (battleShip(p1[row][column], p1[row + 1][column - 1], p1[row + 2][column - 2])) {
//                 alert("Hit!");
//                 return "Hit"; 
//         }
//     }
//     }

//     console.log(checkWinner(p1))
//     console.log(checkWinner2(p2))


// to start, we need our grids

const b1 = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
];

const b2 = [
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

let u1Row;
let u1Column;
let u1Score = 0;

while (u1Score < 2) {

    u1Row = prompt("Please select your row");
    u1Column = prompt("Please select your column");

    if (b2[u1Row][u1Column] == 1) {
        alert("hit!");
        b2[u1Row][u1Column] = 0;
        u1Score++;
    } else {
        alert("Miss! loser")
    }
    alert(`Current Score: User1: ${u1Score}`)

    if (u1Score >= 2) {
        alert("User 1 wins!");
        break;
    }
}