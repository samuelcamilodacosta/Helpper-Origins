let list: any[] = [9, '98a', '8', '82', 321, 'asfdaf', 'abobora', '32'];

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
  for (let index = 0; index < list.length; index++) {
    if (!isNaN(list[index])) {
      list[index] = parseInt(list[index]);
      biggerValue = bigger(biggerValue, list[index]);
      smallerValue = smaller(smallerValue, list[index]);
      averageValue += list[index];
      cont++;
    }
  }
  averageValue /= cont;
  let array: number[] = [biggerValue, smallerValue, averageValue];
  return array;
}

console.log(returnBiggerSmallerAndAverageValue(list));