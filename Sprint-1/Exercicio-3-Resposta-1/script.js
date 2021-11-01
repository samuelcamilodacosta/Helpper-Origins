"use strict";
const text = prompt("Enter list: ");
let list = text.split(", ");
let biggerValue = Number.NEGATIVE_INFINITY, smallerValue = Number.POSITIVE_INFINITY, averageValue = 0, validador = 0, value, index;
for (index = 0; index < list.length; index++) {
    if (parseFloat(list[index])) {
        value = parseFloat(list[index]);
        (biggerValue < value) ? biggerValue = value : biggerValue;
        (smallerValue > value) ? smallerValue = value : smallerValue;
        averageValue += value;
    }
    else {
        alert("This list is not numerical");
        validador = -1;
        break;
    }
}
if (validador != -1) {
    averageValue /= list.length;
    let array = [biggerValue, smallerValue, averageValue];
    alert(`The bigger value on the list: ${array[0]}.\nThe smaller value on the list: ${array[1]}.\nThe average value of the  list: ${array[2]}.`);
}
