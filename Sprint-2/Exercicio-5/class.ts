export default class Words{
    private _word: string;
    constructor(word: string){
        this._word = word;
    }
    public amountVowels(): number {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        this._word = this._word.toLowerCase().normalize('NFD');
        //this.word = this.word.normalize('NFD');
        let result: string[] = this._word.split('').filter((letter: string) => vowels.includes(letter));
        return result.length;
    }
}