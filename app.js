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

// const resetBtn = document.getElementById('restart')
const blocks = document.getElementsByClassName('block')


//Alternate click events from player 1 to player 2

let playerfirstmove= true
tiles.addEventListener('click' , (event)=>{//event & target found on w3schools
    if (event.target.className === 'block' && event.target.innerText === "") {
        event.target.innerHTML = playerfirstmove ? "X" : "O";
        playerfirstmove = !playerfirstmove
    }
    checkresult();
 
})
// only one input per tile

//win condition


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

function checkresult() {
    const grid = 
    [document.getElementById('block_0').innerText,
    document.getElementById('block_1').innerText, 
    document.getElementById('block_2').innerText,
    document.getElementById('block_3').innerText,
    document.getElementById('block_4').innerText,
    document.getElementById('block_5').innerText,
    document.getElementById('block_6').innerText,
    document.getElementById('block_7').innerText,
    document.getElementById('block_8').innerText,
]
    console.log(grid)
   for (let i= 0; i < blocks.length-1; i++) {
        roundEnd= false
        // const winConarr = winCon[i];
        let a = grid[winCon[i][0]];
        let b = grid[winCon[i][1]];
        let c = grid[winCon[i][2]];
        
        if(a !== '' && b !== '' && c !== '') {
           
            
           if (a === b && b === c){
            console.log(a+b+c)
            roundEnd = true;
            
             
            }
            if(roundEnd){
            alert("WINNER")
            console.log("winner")    
}
        }
      
      
    
        

}
}