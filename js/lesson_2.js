//~ TODO:==========================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

function findSmallerNumber(numbers) {
  if (Array.isArray(numbers)) {
    let min = numbers[0];
    for (const number of numbers) {
      if (min > number) {
        min = number;
      }
    }
    return min;
  } else {
    return "Is not array";
  }
}

console.log(findSmallerNumber(numbers));
