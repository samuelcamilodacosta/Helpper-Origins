"use strict";
var list = [9.8, '98a', '8.2', '50.1', 321, 'asfdaf', 'abobora', '32'];
var biggerValue = Number.MIN_VALUE, smallerValue = Number.MAX_VALUE, averageValue = 0, cont = 0;
for (var index = 0; index < list.length; index++) {
    if (!isNaN(list[index])) {
        list[index] = parseFloat(list[index]);
        (biggerValue < list[index]) ? biggerValue = list[index] : biggerValue;
        (smallerValue > list[index]) ? smallerValue = list[index] : smallerValue;
        averageValue += list[index];
        cont++;
    }
}
averageValue /= cont;
var array = [biggerValue, smallerValue, averageValue];
console.log(array);
