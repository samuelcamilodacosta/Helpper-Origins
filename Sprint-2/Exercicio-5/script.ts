import Words from "./class";

/* solution a */
let example: string = "bootcamp origin helpper";
let classOfExample: Words = new Words(example);
console.log(classOfExample.amountVowels()); 

/* solution b */
const button: HTMLButtonElement = document.querySelector('#send') as HTMLButtonElement;
button.addEventListener('click', function (event: MouseEvent) {
  event.preventDefault();
  let word: HTMLInputElement = document.querySelector('#word') as HTMLInputElement; 
  if(word.value==''){
    alert("Por favor, informe a palavra para ser analisada."); 
    return;
  }
  let classOfWord: Words = new Words(word.value)
  let answer: HTMLElement = document.getElementById('answer') as HTMLElement;
  answer.innerHTML = `Quantidade de vogais: ${classOfWord.amountVowels()}`;
});