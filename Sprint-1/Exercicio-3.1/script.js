var list = [9, '8', '82', 321, 'asfdaf', 'abobora', '98a', '32'];
function bigger(x, y) {
    (x < y) ? x = y : x;
    return x;
}
function smaller(x, y) {
    (x > y) ? x = y : x;
    return x;
}
function returnBiggerSmallerAndAverageValue(list) {
    var biggerValue = Number.MIN_VALUE, smallerValue = Number.MAX_VALUE, averageValue = 0, cont = 0;
    for (var i = 0; i < list.length; i++) {
        if (!isNaN(list[i])) {
            list[i] = parseInt(list[i]);
            biggerValue = bigger(biggerValue, list[i]);
            smallerValue = smaller(smallerValue, list[i]);
            averageValue += list[i];
            cont++;
        }
    }
    averageValue /= cont;
    var array = [biggerValue, smallerValue, averageValue];
    return array;
}
console.log(returnBiggerSmallerAndAverageValue(list));