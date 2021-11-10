export default class List {
    constructor(list) {
        this._list = list;
        this._averageValue = 0;
        this._validator = 0;
    }
    numericalList() {
        /**
         * This method validates if the list is numeric.
         * @param _validator - has predefined value as 0
         *
         * if the parseFloat function fails to make it a number and it is not zero
         * change value of _validator to -1, because have an non numeric value on list
         *
         * @returns 0 or -1
         */
        this._list.forEach((arrayItem) => {
            (parseFloat(arrayItem) || arrayItem == "0") ? parseFloat(arrayItem) : this._validator = -1;
        });
        return this._validator;
    }
    findBiggerSmallerAndAverageValue() {
        /**
         * This method finds the largest, smallest, and average value, adds it to an array,
         * and returns the array.
         *
         * @param _list - it's a numerical list to work with.
         * @param biggerValue - gets the first value of the list
         * @param smallerValue - gets the first value of the list
         * @param value - get each value from the list to compare
         * @param _averageValue - add each value to itself
         * @param array - receive biggerValue, smallerValue and _averageValue
         *
         * The biggerValue compares if the value is greater than it, if it is,
         * it will become the value.
         * The smallerValue compares if the value is smaller than it, if it is,
         * it will become the value.
         * The _averageValue it adds all the values in the list and at the end, divides
         * by the number of elements in the list, obtaining the average value.
         *
         * finally add the values biggerValue, smallerValue and _averageValue on array.
         * @returns array
         */
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
