var list = [9, '98a', '8', '82', 321, 'asfdaf', 'abobora', '32'];
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
    for (var index = 0; index < list.length; index++) {
        if (!isNaN(list[index])) {
            list[index] = parseInt(list[index]);
            biggerValue = bigger(biggerValue, list[index]);
            smallerValue = smaller(smallerValue, list[index]);
            averageValue += list[index];
            cont++;
        }
    }
    averageValue /= cont;
    var array = [biggerValue, smallerValue, averageValue];
    return array;
}
console.log(returnBiggerSmallerAndAverageValue(list));
