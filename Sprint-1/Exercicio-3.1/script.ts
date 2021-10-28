let list = [9, '8', '82', 321, 'asfdaf', 'abobora', '98a', '32'];

function bigger(x: number, y: number): number {
  (x < y) ? x = y : x; return x;
}

function smaller(x: number, y: number): number {
  (x > y) ? x = y : x; return x;
}

function returnBiggerSmallerAndAverageValue(list: any[]): number[] {
  let biggerValue: number = Number.MIN_VALUE,
    smallerValue: number = Number.MAX_VALUE,
    averageValue: number = 0,
    cont: number = 0;
  for (let i = 0; i < list.length; i++) {
    if (!isNaN(list[i])) {
      list[i] = parseInt(list[i]);
      biggerValue = bigger(biggerValue, list[i]);
      smallerValue = smaller(smallerValue, list[i]);
      averageValue += list[i];
      cont++;
    }
  }
  averageValue /= cont;
  let array = [biggerValue, smallerValue, averageValue];
  return array;
}

console.log(returnBiggerSmallerAndAverageValue(list));