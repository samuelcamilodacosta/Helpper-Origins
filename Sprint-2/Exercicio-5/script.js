import Words from "./class.js";
//Solution (a) only introduces the user to an example of how the amount vowels method works
let example = document.querySelector('#wordExample');
let classOfExample = new Words(example.value);
let answerExample = document.getElementById('answerExample');
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
const button = document.querySelector('#send');
button.addEventListener('click', actionOnClick);
/**
 * This function is responsible for validating the input and, if possible,
 * printing the response
 * @param event
 */
function actionOnClick(event) {
    event.preventDefault();
    let word = document.querySelector('#word');
    if (word.value == '') {
        return alert("Por favor, informe a palavra a ser analisada.");
    }
    let classOfWord = new Words(word.value);
    let answer = document.getElementById('answer');
    answer.innerHTML = `Quantidade de vogais: ${classOfWord.amountVowels()}`;
}
