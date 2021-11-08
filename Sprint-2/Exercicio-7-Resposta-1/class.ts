export default class List {
    private _list: string[];
    private _averageValue: number;
    private _validator: number;
    constructor(list: string[]) {
        this._list = list;
        this._averageValue = 0;
        this._validator = 0;
    }

    numericalList(){
        for(let index = 0; index < this._list.length; index++){
            if(parseFloat(this._list[index]) || this._list[index] == "0") continue;
            else {
                this._validator = -1;
                break;
            }
        }
        return this._validator;
    }
    findBiggerSmallerAndAverageValue(){
        let biggerValue: number = parseFloat(this._list[0]), 
            smallerValue: number = parseFloat(this._list[0]),
            value: number;
        for (let index = 0; index < this._list.length; index++) {
            (this._list[index] == "0") ? value = 0 : value = parseFloat(this._list[index]);
            (biggerValue < value) ? biggerValue = value : biggerValue;
            (smallerValue > value) ? smallerValue = value : smallerValue;
            this._averageValue += value;
        }
        this._averageValue /= this._list.length;
        let array = [biggerValue, smallerValue, this._averageValue];
        return array;
    }
}

