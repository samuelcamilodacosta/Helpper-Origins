export default class Words{
    private _word: string;
    private readonly _vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    constructor(word: string){
        this._word = word
    }
    public amountVowels(): number {
        /**
        * This method calculates the number of vowels in the sentence
        * 
        * @parameter this._word - the sentence received by the constructor for the variable word
        * 
        * @returns result that is the number of vowels in the setence
        */
        let result: string[] = this._word.toLowerCase().normalize('NFD').split('').filter((letter: string) => this._vowels.includes(letter));
        return result.length;
    }
}