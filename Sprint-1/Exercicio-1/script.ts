function amountVowels(word: string): number {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  word = word.toLowerCase();
  word = word.normalize('NFD');
  let result: string[] = word.split('').filter((letter: string) => vowels.includes(letter));
  return result.length;
}

let example = "bootcamp origin helpper";
console.log(amountVowels(example)); //solution (a)
const btn = document.querySelector('#send') as HTMLInputElement;
btn.addEventListener('click', function (e) {
  e.preventDefault();
  let word = document.querySelector('#word') as HTMLInputElement;
  console.log(amountVowels(word.value)); //solution (b)
});
