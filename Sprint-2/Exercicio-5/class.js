export default class Words {
    constructor(word) {
        this._vowels = ['a', 'e', 'i', 'o', 'u'];
        this._word = word;
    }
    /**
        * This method calculates the number of vowels in the sentence
        *         *
        * @returns returns the size of the string vector that contains the vowels of the setence
        */
    amountVowels() {
        let result = this._word.toLowerCase().normalize('NFD').split('').filter((letter) => this._vowels.includes(letter));
        return result.length;
    }
}
