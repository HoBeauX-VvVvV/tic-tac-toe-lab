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
board = ['', '', '', '', '', '', '', '', '',];
turn = 'X';
winner = false;
tie = false;

/*------------------------ Cached Element References ------------------------*/

const squareEl = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetButtonEl = document.querySelector('#reset');

/*-------------------------------- Functions --------------------------------*/
const updateBoard = () => {
    board.forEach((value, index) => {
        squareEl[index].textContent = value
    });
}

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

const render = () => {
    updateBoard();
    updateMessage();
};

//const init = () => {
//   render();
//};

window.onload = render();

const handleClick = (event) => {
   if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
    return
   } else if  
    (winner === true) { 
     return  
    } placePeice(squareIndex);
      checkForWinner();
      checkForTie();
      updateMessage();
      switchPlayerTurn();
      
};


const placePeice = (index) => {
    board[squareIndex] = turn;
    event.target.textContent = turn;
};

const checkForWinner = () => {
    for (let combo of winningCombos) {
        const [a,b,c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
        }
    }
};

const checkForTie = () => {
    if (winner === true) {
       return
    } if 
    (board.some(square => square === '')) {
    tie = false;
} else {
    tie = true;
   }
};

const switchPlayerTurn = () => {
    if (turn === 'X') {
        turn ='O';
    } else if (turn === 'O') {
        turn = 'X'
    };
}

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    updateBoard();
    updateMessage();
}
/*----------------------------- Event Listeners -----------------------------*/
squareEl.forEach((square) => {
    square.addEventListener('click', (event) => {
    squareIndex = event.target.id    
    handleClick();
  });
});

resetButtonEl.addEventListener('click', (event) => {
    resetGame();
});

//---------------------Finished---------------------------------------------

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.