export default class Words{
    private _word: string;
    private readonly _vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    constructor(word: string){
        this._word = word
    }
    public amountVowels(): number {
        let result: string[] = this._word.toLowerCase().normalize('NFD').split('').filter((letter: string) => this._vowels.includes(letter));
        return result.length;
    }
}