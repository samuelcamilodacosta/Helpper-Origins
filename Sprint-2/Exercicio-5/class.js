export default class Words {
    constructor(word) {
        this._word = word,
            this._vowels = ['a', 'e', 'i', 'o', 'u'];
    }
    amountVowels() {
        this._word = this._word.toLowerCase().normalize('NFD');
        let result = this._word.toLowerCase().normalize('NFD').split('').filter((letter) => this._vowels.includes(letter));
        return result.length;
    }
}
