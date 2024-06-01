/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
let board = '';
let turn = 'X';
let winner = false;
let tie = false;
let squareIndex = '';
board = ['', '', 'O', '', '', 'X', '', '', '',];
turn = 'X';
winner = false;
tie = false;

/*------------------------ Cached Element References ------------------------*/
const squareEl = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
//const boardEl = document.querySelector('.board');

/*-------------------------------- Functions --------------------------------*/
const updateBoard = () => {
    board.forEach((value, index) => {
        squareEl[index].textContent = value
    });
}
//updateBoard(squareEl)
const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = `${turn}'s turn`;
    } else if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie!";
    } else {
        messageEl.textContent = 
        `Congradulations ${turn}, you've won the round!`;
    }
}
//updateMessage()
const render = () => {
    updateBoard();
    updateMessage();
};

const init = () => {
    render();
  //console.log('app has initalized');
};
window.onload = init;

const handleClick = (event) => {
   //const squareIndex = event.target.id
   if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
    return
    //console.log(`1${squareIndex}`);;
   } else if  
    (winner === true) {
        return
    //console.log(`2${squareIndex}`);   
    } placePeice(squareIndex);
    //console.log(`3${squareIndex}`)
   };


const placePeice = (index) => {
    board[squareIndex] = turn;
    event.target.textContent = turn;
}
//7) Create Reset functionality.

/*----------------------------- Event Listeners -----------------------------*/
squareEl.forEach((square) => {
    square.addEventListener('click', (event) => {
    squareIndex = event.target.id    
    handleClick();
    //console.log(squareIndex);
  });
});

//7) Create Reset functionality.

//---------------------Finished---------------------------------------------

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.