import Words from "./class.js";

/* solution a */
let example: HTMLInputElement = document.querySelector('#wordExample') as HTMLInputElement; 
let classOfExample: Words = new Words(example.value);
let answerExample: HTMLElement = document.getElementById('answerExample') as HTMLElement;
answerExample.innerHTML = `Quantidade de vogais: ${classOfExample.amountVowels()}`;

/* solution b */
const button: HTMLButtonElement = document.querySelector('#send') as HTMLButtonElement;
button.addEventListener('click', function (event: MouseEvent) {
  event.preventDefault();
  let word: HTMLInputElement = document.querySelector('#word') as HTMLInputElement; 
  if(word.value==''){
    alert("Por favor, informe a palavra a ser analisada."); 
    return;
  }
  let classOfWord: Words = new Words(word.value)
  let answer: HTMLElement = document.getElementById('answer') as HTMLElement;
  answer.innerHTML = `Quantidade de vogais: ${classOfWord.amountVowels()}`;
});