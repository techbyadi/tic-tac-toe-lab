/*-------------------------------- Constants --------------------------------*/

//console.log('I am app.js');





/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie;


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
//console.log(squareEls);
const messageEl = document.getElementById('message');
//console.log(messageEl);

/*-------------------------------- Functions --------------------------------*/

init();

function init() {
  //console.log('The app has loaded: Starting point');
  board = ['', 'X', '', '', 'O', '', '', '', ''];
  turn = 'X';
  winner = false;
  tie = false;
  render();
}

function render(){
  console.log('I am a render function');
  updateBoard();
}

function updateBoard() {
  board.forEach((cell, idx) => {
    if (cell === 'X') {
      squareEls[idx].textContent = 'X';
      //squareEls[idx].style.backgroundColor = 'green';
    } else if (cell === 'O') {
      squareEls[idx].textContent = 'O';
      //squareEls[idx].style.backgroundColor = 'blue';
    } else {
      squareEls[idx].textContent = '';
    }

    //squareEls[idx].textContent = cell;
    //console.log(cell);
  })
}

/*----------------------------- Event Listeners -----------------------------*/

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


