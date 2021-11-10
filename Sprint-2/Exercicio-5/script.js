import Words from "./class.js";
/* solution a */
let example = document.querySelector('#wordExample');
let classOfExample = new Words(example.value);
let answerExample = document.getElementById('answerExample');
answerExample.innerHTML = `Quantidade de vogais: ${classOfExample.amountVowels()}`;
/* solution b */
const button = document.querySelector('#send');
button.addEventListener('click', function (event) {
    event.preventDefault();
    let word = document.querySelector('#word');
    if (word.value == '') {
        alert("Por favor, informe a palavra a ser analisada.");
        return;
    }
    let classOfWord = new Words(word.value);
    let answer = document.getElementById('answer');
    answer.innerHTML = `Quantidade de vogais: ${classOfWord.amountVowels()}`;
});
