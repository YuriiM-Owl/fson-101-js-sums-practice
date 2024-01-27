//~ TODO:==========================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
/* const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

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

*/

// ! TASK-02
// TODO:============================
//Напишіть функцію unique(arr), яка повертає масив,
//містить лише унікальні елементи arr.
/* const words = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "CSS",
    "JS",
    "Node.js",
    "JS",
    "React",
    "CSS",
    "React",
    "HTML",
    "Node.js",
];

function unique(arr) {
    let uniqueArr = [];
    for (const arrElem of arr) {
        if (!uniqueArr.includes(arrElem)) {
            uniqueArr.push(arrElem);
        }
    }
    return uniqueArr;
}

console.log(unique(words));
*/

// ! TASK-03



// Напишіть функцію makeInvetedString(), яка замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

function makeInvetedString(str) {
    let invertedString = "";
    const arrOfStr = str.split("");
    console.log(arrOfStr);
    for (const element of arrOfStr) {
        if (element === element.toUpperCase()) {
            invertedString += element.toLowerCase();
        }
        else {
            invertedString += element.toUpperCase();
        }
        
    }
    return invertedString;
}
//console.log(makeInvetedString('Java Script'))

// ! TASK- 04

//~ TODO:========================== next
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage(arg) {
console.log(arguments);
let totalCount = 0;
let totalSum = 0;
for (const argument of arguments) {
    //console.log(typeof argument)
    if ( typeof argument==="number" ) { 
        totalCount += 1 
        totalSum += argument
     }

    }
    
    return totalSum / totalCount
    console.log(totalSum)
    console.log(totalCount)
}
console.log(caclculateAverage(10, 5, 12, `S`, 20))

// ! TASK-04
