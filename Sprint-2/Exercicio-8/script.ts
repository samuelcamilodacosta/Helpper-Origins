import List from "./class.js";

const buttonGeniusList: HTMLButtonElement = document.querySelector('#buttonGeniusList') as HTMLButtonElement;
buttonGeniusList.addEventListener('click', function (event: MouseEvent) {
  event.preventDefault();
  let list = new List([
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
  ]);
  list.showTable();
  list.showButtonWhoCreatesAda();
});

const buttonWhoCreatesAda: HTMLButtonElement = document.querySelector('#buttonWhoCreatesAda') as HTMLButtonElement;
buttonWhoCreatesAda.addEventListener('click', function (event: MouseEvent) {
  let creatorAda = new List([
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" }
  ]);
  event.preventDefault();
  creatorAda.showTable();
  creatorAda.buttonShowGeniusList();
});