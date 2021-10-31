let list: any[] = [9.8, '98a', '8.2', '50.1', 321, 'asfdaf', 'abobora', '32'];

let biggerValue: number = Number.MIN_VALUE,
  smallerValue: number = Number.MAX_VALUE,
  averageValue: number = 0,
  cont: number = 0;

for (let index: number = 0; index < list.length; index++) {
  if (!isNaN(list[index])) {
    list[index] = parseFloat(list[index]);
    (biggerValue < list[index]) ? biggerValue = list[index] : biggerValue;
    (smallerValue > list[index]) ? smallerValue = list[index] : smallerValue;
    averageValue += list[index];
    cont++;
  }
}

averageValue /= cont;
let array: number[] = [biggerValue, smallerValue, averageValue];
console.log(array);

