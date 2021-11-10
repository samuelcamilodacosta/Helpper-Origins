export default class Words {
    constructor(word) {
        this._vowels = ['a', 'e', 'i', 'o', 'u'];
        this._word = word;
    }
    amountVowels() {
        /**
        * This method calculates the number of vowels in the sentence
        *
        * @parameter this._word - the sentence received by the constructor for the variable word
        *
        * @returns result that is the number of vowels in the setence
        */
        let result = this._word.toLowerCase().normalize('NFD').split('').filter((letter) => this._vowels.includes(letter));
        return result.length;
    }
}
