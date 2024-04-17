/* const bookShelf = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
  ],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  },
};

bookShelf.addBook({ title: 'Dream Guardian', rating: 9 });
 */

/* const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPricePotions = 0;
    for (let potion of this.potions) {
      totalPricePotions += potions.price;
    }
    return totalPricePotions;
  },
};
 */

/* function addOverNum(value, ...args) {
  let sum = 0;
  for (const arg of args) {
    if (arg > value) {
      sum += arg;
    }
  }
  return sum;
} */

/* Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.
Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:
Властивість best має містити найбільше число з масиву scores
Властивість worst має містити найменше число з масиву scores.
Використовуй оператор (...spread) і методи Math.max() і Math.min().
 */
/* 
function getExtremeScores(scores) {
  return {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  };
}
 */

// const car = {
//   brand: 'mers',
//   model: 'x5',
//   year: '2012',
//   color: 'blue',

//   drive() {
//     console.log('Автомобіль рухається');
//   },
// };
// console.log('Автомобіль рухається');

/* const car = {
  brand: 'mers',
  model: 'x5',
  year: 2012,
  color: 'blue',

  drive() {
    console.log('The car is moving.');
  },
};

car.drive(); */

/* Створіть об'єкт, який представляє книгу. У цьому об'єкті повинні бути наступні
 властивості:

title (назва книги)
author (автор книги)
pages (кількість сторінок)
isRead (логічне значення, що вказує, чи прочитана книга)
Також додайте метод readBook, який змінює значення властивості isRead на true. */
/* 
const book = {
  title: 'This book',
  author: 'Tom Gyuu',
  pages: 244,
  isRead: false,

  readBook() {
    this.isRead = true;
  },
};

book.readBook();
console.log(book); */

/* *****
  Система оцінювання студентів: Створіть масив об'єктів, кожен з яких представляє
   студента з інформацією про його ім'я, прізвище та оцінки за різні предмети.
 Реалізуйте метод для обчислення середнього балу кожного студента та метод для виведення 
 списку студентів,впорядкованого за середнім балом. */

/* const students = [
  { name: 'John', surname: 'Doe', grades: [85, 90, 75] },
  { name: 'Jane', surname: 'Smith', grades: [70, 80, 65] },
  { name: 'Alice', surname: 'Johnson', grades: [90, 95, 85] },
];
function calcAverageScore(studentsGrades) {
  let sum = 0;
  for (let grade of studentsGrades) {
    sum += grade;
  }
  return sum / studentsGrades.length;
}
for (let student of students) {
  console.log(
    `${student.name} ${student.surname}: Average score - ${calcAverageScore(
      student.grades
    )}`
  );
} */

/* ********* */
/**
 * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /**
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /**
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {},

//   /**
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {},

//   /**
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {},

//   /**
//    * Метод повертає поточний баланс
//    */
//   getBalance() {},

//   /**
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {},

//   /**
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {},

//   /* ============== Додаткові методи ============== */
//   /**
//    * Метод видаляє всі транзакції та скидає баланс рахунку до 0.
//    */
//   resetAccount() {},

//   /**
//    * Метод повертає кількість всіх транзакцій.
//    */
//   getTransactionCount() {},
//   /**
//    * Метод повертає середнє значення по типу транзакції за всю історію.
//    * Якщо транзакцій немає повертає 0.
//    */
//   getAverageTransactionValue(type) {},
// };

// const allUsers = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
//   {
//     name: 'Elma Head',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//   },
//   {
//     name: 'Carey Barr',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//   },
//   {
//     name: 'Blackburn Dotson',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//   },
// ];
// console.table(allUsers[1].friends);

/* clickMe.onclick = () => {
  console.log('Cliked');
};
clickMe.addEventListener('click', () => {
  console.log('Clicked addEvenListener');
}); */
/* function fn1() {
  console.log('karaore');
}
function fn2() {
  console.log('ghgjgjgj');
}
clickMe.onclick = () => {
  fn1();
  fn2();
};
clickMe.onclick = null; */
/* const onBtnClick = () => {
  console.log('Clicked addEvenListener');
};

clickMe.addEventListener('click', onBtnClick);
 */

/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * фіолетовий квадратик зміщуватись на 50px по діагоналі
 */
/* const clickMe = document.querySelector('.js-click');
const addEvt = document.querySelector('.js-add-listener');
const removeEvt = document.querySelector('.js-remove-listener');
const onBtnClick = () => {
  console.log('Clicked on btn');
};
addEvt.addEventListener('click', () => {
  console.log('Add event listener');
  clickMe.addEventListener('click', onBtnClick);
});
removeEvt.addEventListener('click', () => {
  console.log('remove event listener');
  clickMe.removeEventListener('click', onBtnClick);
}); */
// console.dir(clickMe);
// const box = document.querySelector('.js-box');
// // console.dir(box);
// clickMe.addEventListener('click', moveSquare);
// let step = 0;
// function moveSquare() {
//   // console.log(box);
//   if (step >= 500) {
//     console.log('box on edge');
//   }
//   step += 50;
//   box.style.transform = `translate(${step}px,${step}px)`;

//   console.log(step);
// }

// Подія input
// подія blur

/* const userName = document.querySelector('.js-user-name');

const onInputName = (event, number) => {
  // console.log('register inpur event');
  const inputEl = event.currentTarget;
  console.log(inputEl);
  console.log(inputEl.value);
  console.log(number);

  // console.log(event);
};
userName.addEventListener('input', event => {
  onInputName(event, 25);
});
message.addEventListener('input', onInputName);
 */
// const userName = document.querySelector('.js-user-name');

// userName.addEventListener('focus', () => {
//   console.log('Start some anamation');
// });

// const onInputName = (event, number) => {
//   // console.log('register inpur event');
//   const inputEl = event.currentTarget;
//   console.log(inputEl);
//   console.log(inputEl.value);
//   console.log(number);

//   // console.log(event);
// };
// userName.addEventListener('focus', () => {
//   console.log('Set cursor to field');
// });
// userName.addEventListener('blur', () => {
//   console.log('Start some animation...');
// });
// #endregion

// message.addEventListener('input', onInputName);
/* 
const userName = document.querySelector('.js-user-name');
userName.addEventListener('blur', event => {
  const name = event.currentTarget.value;
  // console.log('name:', name);
  alert(`${name} glat to see you`);

  event.currentTarget.value = '';
});
 */

/**
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector('.js-form');
const onFormSubmit = event => {
  event.preventDefault();
  console.dir(event.currentTarget.elements);
  // const userEmail = event.currentTarget.elements.user_email;
  // console.log('onFormSubmit  userEmail:', userEmail.value);
  // const userPass = event.currentTarget.elements.user_password;
  // console.log('onFormSubmit  userPass:', userPass.value);
  // const userMsg = event.currentTarget.elements.user_comment;
  // console.log('onFormSubmit  userMsg:', userMsg.value);
  // const data = new FormData(form);
  // data.forEach((fieldValue, fieldKey) => {
  //   console.log(`${fieldKey} => ${fieldValue}`);
  // });

//   const formEl = event.currentTarget.elements;

//   const info = {
//     email: formEl.user_email.value,
//     pass: formEl.user_password.value,
//     message: formEl.user_comment.value,
//   };

//   console.log(info);

//   event.currentTarget.reset();
// };

// form.addEventListener('submit', onFormSubmit);
