function amountVowels(word: string): number {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  word = word.toLowerCase();
  word = word.normalize('NFD');
  let result: string[] = word.split('').filter((letter: string) => vowels.includes(letter));
  return result.length;
}

let example: string = "bootcamp origin helpper";
console.log(amountVowels(example)); //solution (a)
const button: HTMLButtonElement = document.querySelector('#send') as HTMLButtonElement;
button.addEventListener('click', function (e: MouseEvent) {
  e.preventDefault();
  let word: HTMLInputElement = document.querySelector('#word') as HTMLInputElement;
  console.log(amountVowels(word.value)); //solution (b)
});