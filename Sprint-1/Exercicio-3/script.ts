let list = [9, '8', '82', 321, 'asfdaf', 'abobora', '98a', '32'];

function returnBiggerSmallerAndAverageValue(list: any[]): number[] {
  let biggerValue: number = Number.MIN_VALUE,
    smallerValue: number = Number.MAX_VALUE,
    averageValue: number = 0,
    cont: number = 0;
  for (let i: number = 0; i < list.length; i++) {
    if (!isNaN(list[i])) {
      list[i] = parseInt(list[i]);
      (biggerValue < list[i]) ? biggerValue = list[i] : biggerValue;
      (smallerValue > list[i]) ? smallerValue = list[i] : smallerValue;
      averageValue += list[i];
      cont++;
    }
  }
  averageValue /= cont;
  let array = [biggerValue, smallerValue, averageValue];
  return array;
}

console.log(returnBiggerSmallerAndAverageValue(list));