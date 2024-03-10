// let msg; // undefined
// const username = 'Jupiter';

// console.log('After');
// console.log(msg);

// // console.log('Before');

// if (username === 'Mango') {
//   msg = `Hello, ${username}`;
// } else if (username === 'Poly') {
//   msg = `Hello, ${username}`;
// } else if (username === 'Ajax') {
//   msg = `Hello, ${username}`;
// } else {
//   msg = `Sorry, ${username}. Access denied`;
// }

// /**
//  * -----------------------------
//  */

// // Level 1 = 100
// // Level 2 = 1000
// // Level 3 = 2000
// function getRandomPoints() {
//   let points;
//   const randomNumber = Math.random();

//   if (randomNumber > 0.5) {
//     points = Number.parseInt(randomNumber * 1000);
//   } else {
//     points = Number.parseInt(randomNumber * 100);
//   }

//   return points;
// }

// const points = getRandomPoints();

// if (points <= 100) {
//   console.log(`Level 1. You have ${points} points`);
// } else if (points <= 500) {
//   console.log(`Level 2. You have ${points} points`);
// } else if (points > 500) {
//   console.log(`Level 3. You have ${points} points`);
// }

// /**
//  * -----------------------------
//  */
// const balance = -1000;
// let message = balance >= 0 ? 'Negative' : 'Positive';

// if (balance >= 0) {
//   message = 'Positive';
// } else {
//   message = 'Negative';
// // }
// console.log(message);

// function findNumber(start, end, divisor) {
//   // let start = 2;
//   // let end = 6;
//   // let divisor = 5;
//   let returNumber;
//   for (returNumber = start; returNumber <= end; returNumber++) {
//     if (returNumber % divisor === 0) {
//       return returNumber;
//     }
//   }
// }

// function createReversedArray() {
//   const items = [];
//   const reversedItems = items.toReversed();
//   return reversedItems;
// }
// console.log(createReversedArray(12, 85, 37, 4));
// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// function calculateTax(amount, taxRate = 1) {
//   for (let i = 0; i <= amount; i *= 0.2) {
//     return amount * `${taxRate}`;
//   }
// }
// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));

// console.log(calculateTax(100));

// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// function fn() {
//   // if (a === 10) {
//   //     return "Вірно";
//   // }
//   // return "Невірно";
//   return a === 10 ? 'Вірно' : 'Невірно';
// }
// console.log(fn(10));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

// function checkWeather(num) {
//   let result;
//   switch (num) {
//     case 1:
//       result = 'зима';
//       break;
//     case 2:
//       return 'весна';
//       break;
//     case 3:
//       return 'літо';
//       break;
//     case 4:
//       return 'осінь';
//       break;
//     default:
//       result = 'Ведіть число від 1 до 4';
//   }
//   return result;
// }
// console.log(checkWeather(7));

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const modifiedHours = String(hours).padStart(2, 0);

//   const minutes = hours % 60;
//   const modifiedMinutes = String(totalMinutes).padStart(2, 0);
//   return `${modifiedHours}:${modifiedMinutes}`;
// }
// console.log(formatTime(69));

////
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
