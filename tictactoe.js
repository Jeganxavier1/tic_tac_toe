let cells = document.querySelectorAll('.cell');
cells = Array.from(cells);

let currentPlayer ="X"

cells.forEach(function(cell){
    cell.addEventListener("click",function select(){
       if(cell.innerText !="")
       return 
       cell.innerText = currentPlayer;
       checkWinner();
       currentPlayer = currentPlayer == "X" ? "O":"X";
       matchDraw();
    });
});

let winningCombination =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function checkWinner(){
    winningCombination.forEach((combination)=>{
        let check = combination.every(index => cells[index].innerText == currentPlayer)
       
        if(check){
        alert("player "+ currentPlayer +" won the game");
        resultText ="player "+ currentPlayer +" won the game";
        }
    })

}

function matchDraw(){
    const draw = cells.every((item)=>item.innerText ==="X" || item.innerText ==="O")
    if(draw){
        alert("match draw");
        resultText = "match draw";        
    }
}

function playAgain(){
    cells.forEach(cell => cell.innerText = null);
    currentPlayer="X";
};



