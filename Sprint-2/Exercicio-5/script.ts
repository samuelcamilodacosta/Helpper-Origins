import Words from "./class.js";

//Solution (a) only introduces the user to an example of how the amount vowels method works

let example: HTMLInputElement = document.querySelector('#wordExample') as HTMLInputElement; 
let classOfExample: Words = new Words(example.value);
let answerExample: HTMLElement = document.getElementById('answerExample') as HTMLElement;
answerExample.innerHTML = `Quantidade de vogais: ${classOfExample.amountVowels()}`;

// solution (b)
/**
  * User event interation 
  * When the event button is clicked, it validates to prevent an empty value from being passed
  * 
  * @param word - receive the value of the input id #word
  * @param classOfWord - creates a class with the constructor method passing the word string value
  * 
  * @returns the result of applying the amount vowels method if string is not empty else returns an alert.
  */
const button: HTMLButtonElement = document.querySelector('#send') as HTMLButtonElement;
button.addEventListener('click', actionOnClick);

/**
 * This function is responsible for validating the input and, if possible, 
 * printing the response
 * @param event 
 */

function actionOnClick(event: MouseEvent): void {
  
  event.preventDefault();
  let word: HTMLInputElement = document.querySelector('#word') as HTMLInputElement; 
  if(word.value==''){
    return alert("Por favor, informe a palavra a ser analisada.");
  }
  let classOfWord: Words = new Words(word.value)
  let answer: HTMLElement = document.getElementById('answer') as HTMLElement;
  answer.innerHTML = `Quantidade de vogais: ${classOfWord.amountVowels()}`;
}