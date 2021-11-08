import List from "./class.js";
const text: string = prompt("Enter list: ") as string;
let list: List = new List(text.split(", "));
let answer: number[];

if(list.numericalList() != -1){
  answer = list.findBiggerSmallerAndAverageValue();
  alert (`The bigger value on the list: ${answer[0]}.\nThe smaller value on the list: ${answer[1]}.\nThe average value of the  list: ${answer[2]}.`);
}else{
  alert("This list is not numerical!");
}
