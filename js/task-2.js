/* function greet(name) {
  return ` ${name} зустрічай мене`;
}
console.log(greet('Юрка'));
console.log(greet);
 */

// * // / / / / / / / / /  *

/* function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest('Mango', greet); // "Registering Mango!"
// "Welcome Mango!"

registerGuest('Mango', notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"
 */

// * // / / / / / / / / /  *

/* 
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

// Передаємо інлайн-функцію greet у якості колбека
registerGuest('Mango', function greet(name) {
  console.log(`Welcome ${name}!`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest('Poly', function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});
 */

// * // / / / / / / / / /  *
/* 
const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
}); */

// * // / / / / / / / / /  *

/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (number) {
    totalPrice += number;
  });

  return totalPrice;
}
 */

// * // / / / / / / / / /  *

/* 
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => (totalPrice += item));

  return totalPrice;
};
orderedItems.forEach(item => (totalPrice += item));
 */
// * // / / / / / / / / /  *

/* const filteredNumbers = (numbers, value) => {
  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
 */

// * // / / / / / / / / /  *

/* const changeEven = (numbers, value) => {
  const newArray = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.push(number + value); // додаємо value до самого числа, а не до масиву
    } else {
      newArray.push(number);
    }
  });
  return newArray;
};
console.log(changeEven([1, 2, 3, 4, 5], 10));
 */

// * // / / / / / / / / /  *

/* const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

// У колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston


 */

// * // / / / / / / / / /  *

/* const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

console.log(colorPickerOptions.find(option => option.label === 'blue')); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find(option => option.label === 'pink'); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find(option => option.label === 'white'); // undefined */

// * // / / / / / / / / /  *

/* const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce(playtime.value, 0);

const averagePlayTime = totalPlayTime / playtimes.length;
 */

// * // / / / / / / / / /  *

/* const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
]; */

// * // / / / / / / / / /  *
/* 
const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
// Сортування за назвою автора
const sortedByAuthorName = [...books].sort((a, b) =>
  a.title.localeCompare(b.title)
);

// Сортування у зворотному порядку за назвою автора
const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.title.localeCompare(a.title)
);
 */

/* const students = [
  { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
  { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
  { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
  { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
];

const names = students
  .toSorted((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
 */

// * // / / / / / / / / /  *

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .toSorted((a, b) => a.author.localeCompare(b.author));
const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((a, b) => a.localeCompare(b)); */
