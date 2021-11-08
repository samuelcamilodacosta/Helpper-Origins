export default class Words {
    constructor(word) {
        this._word = word;
    }
    amountVowels() {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        this._word = this._word.toLowerCase().normalize('NFD');
        //this.word = this.word.normalize('NFD');
        let result = this._word.split('').filter((letter) => vowels.includes(letter));
        return result.length;
    }
}
