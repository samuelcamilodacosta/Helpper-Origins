var list = [9, '8', '82', 321, 'asfdaf', 'abobora', '98a', '32'];
function returnHigherLowerAndAverageValue(list) {
    var higherValue = Number.MIN_VALUE, lowerValue = Number.MAX_VALUE, averageValue = 0, cont = 0;
    for (var i = 0; i < list.length; i++) {
        if (!isNaN(list[i])) {
            list[i] = parseInt(list[i]);
            if (higherValue < list[i])
                higherValue = list[i];
            if (lowerValue > list[i])
                lowerValue = list[i];
            averageValue += list[i];
            cont++;
        }
    }
    averageValue /= cont;
    var array = [higherValue, lowerValue, averageValue];
    return array;
}
console.log(returnHigherLowerAndAverageValue(list));
