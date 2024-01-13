"use strict";

// ? question-01

// let userName = "Ілля";
// console.log(`привіт ${1}`); // ?
// console.log(`привіт ${"userName"}`); // ?
// console.log(`привіт ${userName}`); // ?

// ? sum-01

// function rectangArea(length, width) {
//     const area = length * width;
//     return area;
// }

// console.log(rectangArea(20, 49));
// console.log(rectangArea(107, 15));
// console.log(rectangArea(10, 4));

// const testVar = "test Call";

// console.log(testVar);

// ? sum-02
//TODO:===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

function time(minutes) {
    const hour = Math.floor(minutes / 60);
    const modifiedHours = String(hour).padStart(2, 0);
    console.log(modifiedHours)
    const restMinutes = minutes % 60;
    console.log(restMinutes)
    const modifiedMinutes = String(restMinutes).padStart(2, 0)
    console.log(modifiedMinutes)
    return `${modifiedHours}:${modifiedMinutes}`;
}
console.log(time(64));