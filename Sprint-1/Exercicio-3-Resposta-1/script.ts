const text: string = prompt("Enter list: ") as string;
let list: string[]= text.split(", ");

let biggerValue: number = Number.NEGATIVE_INFINITY,
  smallerValue: number = Number.POSITIVE_INFINITY,
  averageValue: number = 0,
  validador: number = 0,
  value: number,
  index: number;

for (index = 0; index < list.length; index++) {
  if (parseFloat(list[index])) {
    value = parseFloat(list[index]);
    (biggerValue < value) ? biggerValue = value : biggerValue;
    (smallerValue > value) ? smallerValue = value : smallerValue;
    averageValue += value;
  }else{
    alert("This list is not numerical");
    validador = -1;
    break;
  }
}

if(validador != -1){
  averageValue /= list.length;
  let array: number[] = [biggerValue, smallerValue, averageValue];
  alert (`The bigger value on the list: ${array[0]}.\nThe smaller value on the list: ${array[1]}.\nThe average value of the  list: ${array[2]}.`);
}
