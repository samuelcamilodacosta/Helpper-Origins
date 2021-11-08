import Words from "./class.js";
/* solution a */
let example = "bootcamp origin helpper";
let classOfExample = new Words(example);
console.log(classOfExample.amountVowels());
/* solution b */
const button = document.querySelector('#send');
button.addEventListener('click', function (e) {
    e.preventDefault();
    let word = document.querySelector('#word');
    if (word.value == '') {
        alert("Por favor, informe a palavra para ser analisada.");
        return;
    }
    let classOfWord = new Words(word.value);
    let answer = document.getElementById('answer');
    answer.innerHTML = `Quantidade de vogais: ${classOfWord.amountVowels()}`;
});
