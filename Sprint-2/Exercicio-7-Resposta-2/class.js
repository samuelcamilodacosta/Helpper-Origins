export default class List {
    constructor(list) {
        this._list = list;
        this._averageValue = 0;
        this._validator = 0;
    }
    numericalList() {
        this._list.forEach((arrayItem, index) => {
            (parseFloat(arrayItem)) ? parseFloat(arrayItem) : this._validator = -1;
            //(parseFloat(arrayItem) || arrayItem == "0") ? parseFloat(arrayItem) : this._validator = -1;
        });
        return this._validator;
    }
    findBiggerSmallerAndAverageValue() {
        let biggerValue = parseFloat(this._list[0]), smallerValue = parseFloat(this._list[0]), value;
        this._list.forEach((arrayItem, index) => {
            (arrayItem == "0") ? value = 0 : value = parseFloat(arrayItem);
            if (index == 0) {
                smallerValue = value;
                biggerValue = value;
            }
            (biggerValue < value) ? biggerValue = value : biggerValue;
            (smallerValue > value) ? smallerValue = value : smallerValue;
            this._averageValue += value;
        });
        this._averageValue /= this._list.length;
        let array = [biggerValue, smallerValue, this._averageValue];
        return array;
    }
}
