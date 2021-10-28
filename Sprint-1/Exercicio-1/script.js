function amountVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    word = word.toLowerCase();
    word = word.normalize('NFD');
    var result = word.split('').filter(function (letter) { return vowels.includes(letter); });
    return result.length;
}
var example = "bootcamp origin helpper";
console.log(amountVowels(example)); //solution (a)
var btn = document.querySelector('#send');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    var word = document.querySelector('#word');
    console.log(amountVowels(word.value)); //solution (b)
});
