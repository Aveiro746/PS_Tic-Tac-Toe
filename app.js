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


const tiles= document.getElementById('gamegrid')
const resetBtn = document.getElementById('restart')
const blocks = document.getElementsByClassName('block')


//Alternate click events from player 1 to player 2

let playerfirstmove= true
tiles.addEventListener('click' , (event)=>{
    if (event.target.className === 'block' && event.target.innerText === "") {
        event.target.innerHTML = playerfirstmove ? "X" : "O";
        playerfirstmove = !playerfirstmove
    }
 
})
// only one input per tile

//win condition
let grid = ["" , "" , "" , "" , "" , "" , "" ,"" , ""]
const winCon = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

// inside of wincon arr we have idx we have to check ,  all characters in the given idx need to be the same, none empty , 
// function checkresult() {
//    for (let i= 0; i < blocks.length-1; i++) {
//        for( let j = 0 ; j < blocks.length-1; i++){
//            const 
//        }
//    }
// //     if ()
//    }
// //tie event
// checkresult()