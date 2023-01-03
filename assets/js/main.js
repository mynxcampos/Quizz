let count = 1;
let score = 0;
let counter = 0;
let end = "Fin du quiz" + score;
let inter;
let question = [
  "Quelle est la capitale de la Tunisie?",
  "Dans quel continent se trouve le Chili?",
  "Quelle langue on parle en Inde?",
  "Comment s'appelle la monnaie en Corée du Sud?",
  "Quel est le plus grand pays du monde?",
];
let random;
let answers = [
  ["Rabat", "Madrid", "Tunis", "HongKong"],
  ["Amérique du Nord", "Asie", "Amérique du Sud", "Afrique du Sud"],
  ["Indien", "Anglais", "Turque", "Hindi"],
  ["Won", "Yen", "Renminbi", "Roupie"],
  ["Canada", "Russie", "USA", "Chine"],
];
let goodanswer = ["Tunis", "Amérique du Sud", "Hindi", "Won", "Russie"];

// Fonction pour lancer des questions au hasard

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour afficher la question\reponse

function displayQ() {
  clearInterval(inter);
  temps = 10;
  if (counter < 5) {
    inter = setInterval(diminuerTemps, 1000);
    random = randomNumber(0, question.length - 1);
    question.innerHTML = question[random];
    document.querySelector("#count").innerHTML = count++;
    document.querySelector("#question").innerHTML = question[random];
    displayR();
  } else {
    document.querySelector("#container").childNodes.forEach(function (el) {
      el.remove();
    });
    document.querySelector("#container").innerHTML = "<p>Fin du Quiz !</p>"; //fin du quiz
  }
}

// Fonction pour chercher la reponse

function displayR() {
  let reponseContainer = document.querySelectorAll(".reponse");
  for (let i = 0; i < reponseContainer.length; i++) {
    reponseContainer[i].innerHTML = answers[random][i];
  }
}

// Relancer les questions/relancer une question/Fin du quiz

function replay(elem) {
  counter++;
  console.log(random);
  if (elem.innerHTML == goodanswer[random]) {
    score++;
    document.querySelector("#score").innerHTML = score;
  }

  if (counter == 5) {
    console.log("bravo");
  } else {
    question.splice(random, 1);
    answers.splice(random, 1);
    goodanswer.splice(random, 1);
    
    end = question - 1;
    displayQ();
  }
}

// Button reset\relancer le Quiz

document.querySelector(
  "#butreset"
).innerHTML = `<a href="">Recommencer le Quiz !</a>`;

// Lancer un timer

let temps = 10;
const timerElement = document.getElementById("timer");
timerElement.innerText = temps;
function diminuerTemps() {
  timerElement.innerText = temps;
  temps--;
  if (temps == -1) {
    question.splice(random, 1);
    answers.splice(random, 1);
    temps = 10;
    counter++;
    displayQ();
  }
}
