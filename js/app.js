/*-------------------------------- Constants --------------------------------*/
const squareEl = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
//console.log(squareEl)


/*---------------------------- Variables (state) ----------------------------*/
let board = '';
let turn = '';
let winner = '';
let tie = '';



/*------------------------ Cached Element References ------------------------*/
board = ['', '', '', '', '', '', '', '', '',];
//console.log(board[0]);
turn = 'X';
winner = false;
tie = false;

//console.log(board);

/*-------------------------------- Functions --------------------------------*/
const updateBoard = () => {
    board.forEach((value, index) => {
        squareEl[index].textContent = value
    });
}
updateBoard(squareEl)

const render = () => {

};

const init = () => {
    render()
  //console.log('app has initalized');
};
window.onload = init;


//4) The state of the game should be rendered to the user.

//7) Create Reset functionality.

/*----------------------------- Event Listeners -----------------------------*/

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.




//---------------------Finished---------------------------------------------

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//5) Define the required constants.
