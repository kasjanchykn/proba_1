const numbers = [5, 10, 15, 20, 25];

const result = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > 120) {
    result.push(element);
  }
}
// console.log('For loop:', result);

const callback = function (item, index, array) {
  return item > 12;
};

const filteredNumbers = numbers.filter(element => element > 12); //неявне приведення

console.log('Method filter:', filteredNumbers);

/**
 * ---------------------------
 */
const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/**
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
 * значення параметра threshold.
 */
// console.table(allCars);
// const filterByPrice = (cars, threshold) => {
//   return cars.filter((item, index, array) => {
//     console.log(item.price <= threshold);
//     return item.price <= threshold;
//   });
// };
const filterByPrice = (cars, threshold) =>
  cars.filter(item => item.price <= threshold);

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/**
 *  * Нехай функція getCarsWithDiscount повертає масив автомобілів
 * властивість onSale яких true.
 */

const getCarsWithDiscount = cars => cars.filter(item => item.onSale);

// console.table(getCarsWithDiscount(allCars));

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */

const getCarsWithType = (cars, type) => cars.filter(item => item.type === type);

// console.table(getCarsWithType(allCars, 'suv'));
// console.table(getCarsWithType(allCars, 'sedan'));

/**
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

const numbers = [5, 10, 15, 20, 25, 10];

let result = undefined;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 11) {
    result = element;
    break;
  }
}

// console.log(result);

const number = numbers.find((item, index, array) => {
  // console.log(item);
  return item === 10;
});
// console.log('Output', number);

/**
 * -----------------------------
 */
const allCars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
  { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
  { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
  { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
  { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
  { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
  { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
];
console.table(allCars);
/**
 * Шукаємо машину за моделлю
 */
// const getCarByModel = (cars, model) => {
//   return cars.find((item, index, array) => {
//     return item.model === model;
//   });
// };
const getCarByModel = (cars, model) => cars.find(item => item.model === model);

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));

/**
 * Шукаємо машину за типом кузова
 */
const getCarByType = (cars, type) => {
  return cars.find((item, index, array) => {
    return item.type === type;
  });
};

console.log(getCarByType(allCars, 'sedan'));
console.log(getCarByType(allCars, 'truck'));
console.log(getCarByType(allCars, 'tank'));

/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];
let result = 0;
for (let index = 0; index < numbers.length; index++) {
  const item = numbers[index];
  result += item;
}

// console.log('Result is:', result);

// function callback(accumulator, item, index, array) {
//   console.log(
//     `Start value: ${accumulator}, array item ${item} with index ${index} in array [${array}]`
//   );

//   return accumulator;
// }

// const total = numbers.reduce((prevValue, currValue, index, array) => {
//   return prevValue + currValue;
// }, 0);
const total = numbers.reduce((prevValue, currValue, index) => {
  // prevValue.push(currValue + 10);
  // return prevValue;
  const key = `${index}_`;
  const obj = {
    [key]: currValue,
  };

  prevValue.push(obj);
  return prevValue;
}, []);
console.log(total);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
const salaries = Object.values(salary);
// console.log('salaries:', salaries);
const totalSalary = salaries.reduce((acc, item) => {
  return acc + item;
}, 0);
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

let totalTime = 0;
// for (let index = 0; index < players.length; index++) {
//   const item = players[index];
//   // console.log('item:', item.timePlayed);
//   totalTime += item.timePlayed;
// }
for (const player of players) {
  totalTime += player.timePlayed;
}
// console.log('Total time with for:', totalTime);

const totalTimePlayed = players.reduce((acc, item) => {
  return acc + item.timePlayed;
}, 0);
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 }, // 200
  { label: 'Bananas', price: 120, quantity: 3 }, // 360
  { label: 'Lemons', price: 70, quantity: 4 }, // 280
];

const totalAmount = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

// console.log(totalAmount);

const players1 = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players1); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((total, current) => {
  return total + current;
}, 0);
const averagePlayTime = totalPlayTime / playtimes.length;
