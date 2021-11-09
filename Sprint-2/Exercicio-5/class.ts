export default class Words{
    private _word: string;
    private readonly _vowels: string[];
    constructor(word: string){
        this._word = word,
        this._vowels = ['a', 'e', 'i', 'o', 'u']
    }
    public amountVowels(): number {
        this._word = this._word.toLowerCase().normalize('NFD');
        let result: string[] = this._word.toLowerCase().normalize('NFD').split('').filter((letter: string) => this._vowels.includes(letter));
        return result.length;
    }
}