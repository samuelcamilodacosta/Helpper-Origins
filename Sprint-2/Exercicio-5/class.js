export default class Words {
    constructor(word) {
        this._vowels = ['a', 'e', 'i', 'o', 'u'];
        this._word = word;
    }
    amountVowels() {
        let result = this._word.toLowerCase().normalize('NFD').split('').filter((letter) => this._vowels.includes(letter));
        return result.length;
    }
}
