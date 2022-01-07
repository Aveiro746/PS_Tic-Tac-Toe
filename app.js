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
const tiles= document.getElementById('gamegrid')

//Alternate click events from player 1 to player 2

let playerfirstmove= true
tiles.addEventListener('click' , (event)=>{
    if (event.target.className === 'block') {
        event.target.innerHTML = playerfirstmove ? "X" : "O";
        playerfirstmove = !playerfirstmove
    }
    return;
})
// only one input per tile
//win condition
//tie event
//reset board
