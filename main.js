let board = [];
let currentGame = [];
let savedGames = [];

const state = {
  board: [],
  currentGame: [],
  savedGames: [],
};

function start() {
  createBoard();
  newGame();
  render();
}

function addNumberToGame(numberToAdd) {
  /* if (state.currentGame.length > 20) {
    alert("Esse é o máximo de números que você pode adicionar!");
    return;
  } */

  if (isNumberInGame(numberToAdd) === true) {
    console.log("Esse número já está no jogo!");
    removeNumberFromGame(numberToAdd);
    console.log(true);
  } else {
    state.currentGame.push(numberToAdd);
    console.log(false);
    console.log(state.currentGame);
  }
}
function isNumberInGame(numberToCheck) {
  if (state.currentGame.includes(numberToCheck) == true) {
    return true;
  } else {
    return false;
  }
}
function removeNumberFromGame(numberToRemove) {
  let newGame = [];

  for (let i = 0; i < state.currentGame.length; i++) {
    let currentNumber = state.currentGame[i];
    if (currentGame === numberToRemove) {
      continue;
    }
    newGame.push(currentNumber);
  }
  state.currentGame = newGame;
  classList.add("number");
}
function saveGame() {
  if (state.currentGame.length > 14 && state.currentGame.length < 21) {
    state.savedGames.push(state.newgame);
  } else {
    alert("O jogo não está completo");
    return;
  }
}
function resetGame() {
  state.currentGame = [];
}
function createBoard() {
  state.board = [];

  for (let i = 1; i < 26; i++) {
    state.board.push(i);
  }
}
function newGame() {
  resetGame();
  render();
}
function render() {
  renderBoard();
  renderButtons();
}
function renderBoard() {
  let divGame = document.querySelector("#lotofacil-numbers");

  divGame.innerHTML = "";

  let ulNumbers = document.createElement("ul");
  ulNumbers.classList.add("numbers");

  for (let i = 0; i < state.board.length; i++) {
    let currentNumber = state.board[i];

    let liNumber = document.createElement("li");
    liNumber.textContent = currentNumber;
    liNumber.addEventListener("click", handleClickNumber);
    liNumber.classList.add("number");

    ulNumbers.appendChild(liNumber);
  }

  divGame.appendChild(ulNumbers);
}
function handleClickNumber(event) {
  let value = parseInt(event.currentTarget.innerHTML);
  event.currentTarget.classList.add("active");
  if (isNumberInGame(value) === true) {
    removeNumberFromGame(value);
  } else {
    addNumberToGame(value);
  }
}
function renderButtons() {
  let divButtons = document.querySelector("#lotofacil-buttons");
  divButtons.innerHTML = "";

  let buttonNewGame = createNewGameButton();
  let buttonRandomGame = createRandomGameButton();
  divButtons.appendChild(buttonNewGame);
  divButtons.appendChild(buttonRandomGame);
}
function createNewGameButton() {
  let button = document.createElement("button");
  button.textContent = "Novo Jogo";

  button.addEventListener("click", newGame);
  return button;
}
function createRandomGameButton() {
  let button = document.createElement("button");
  button.textContent = "Jogo Aleatório";

  button.addEventListener("click", randomGame);
  return button;
}
function randomGame() {
  resetGame();

  while (state.currentGame.length < 21) {
    let randomNumber = Math.random() * 25;
    addNumberToGame(randomNumber);
  }
}
function renderSavedGames() {}
start();
