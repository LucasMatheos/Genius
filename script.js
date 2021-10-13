let order = [];
let clickedOrder = [];
let score = 0;

// 0 = green
// 1 = red
// 2 = yellow
// 3 = blue

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  console.log(order);
  for (let i in order) {
    console.log(i, order[i]);
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

let lightColor = (element, number) => {
  number = number * 1500;
  console.log(number);
  setTimeout(() => {
    element.classList.add("selected");
    console.log("setou");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
    console.log("Tirou");
  }, number + 250);
};

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê Acertou! Iniciando Próximo Nivel!`);
    nextLevel();
  }
};

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");
  console.log(color);
  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  });
};

let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

let nextLevel = () => {
  score++; // increment
  shuffleOrder();
};

let gameOver = () => {
  alert(`Pontuação: ${score}!\n Você perdeu o Jogo.`);
  order = [];
  clickedOrder = [];

  playGame();
};

let playGame = () => {
  alert("Bem Vindo! Iniciando Rodada...");
  score = 0;
  nextLevel();
};

green.onclick = () => {
  click(0);
};
red.onclick = () => {
  click(1);
};
yellow.onclick = () => {
  click(2);
};
blue.onclick = () => {
  click(3);
};

playGame();
