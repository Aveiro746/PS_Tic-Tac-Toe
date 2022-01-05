// [0][1][2]
// [3][4][5]
// [6][7][8]

// Winning conditions: 8
// [0,1,2]
// [3,4,5]
// [6,7,8]
// [0,3,6]
// [1,4,7]
// [2,5,8]
// [0,4,8]
// [2,4,6]

//Get block tiles from Html
let tiles = document.getElementsByClassName('block');




// assign player 1 and 2 symbols
let player1= "X"
let player2 ="O"

let move = document.createElement("p")
let player1move=document.createTextNode("X")//createTextNode found in W3schools
move.appendChild(player1move)
//Alternate click events from player 1 to player 2


//winning conditions
const wincon = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
]