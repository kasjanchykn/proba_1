// Задачі блендед
/* Задача1 */
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return !this.a || !this.b ? false : this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};
calculator.read(3, 2);
console.log('🚀 ~ calculator.sum:', calculator.sum());
console.log('🚀 ~ calculator.mult:', calculator.mult());

/* Задача2 */

/* напиши функцію яка приймає масив обєктів  і рядок з назвою каменю.Функція що повертає 
загальну вартість каменю з таким імям ціною та кількістю обєктів */

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діаманд', price: 2700, quantity: 6 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 150, quantity: 100 },
];

const calcTotalPrice = (stones, stonesName) => {
  for (const stone of stones) {
    if (stone.name === stonesName) {
      return stone.price * stone.quantity;
    }
  }
  return 'not find';
};

calcTotalPrice(stones, 'Смарагд');
console.log('🚀 ~ calcTotalPrice():', calcTotalPrice(stones, 'Смарагд'));

/* Задача 3
Напишіть 2 функції.Перша приймає імя та ціну товару та колбек.Функція створює обєкт товару 
додаючи йому універсальний індифікатор id і викликає колбек.Передаючи йому створений обєкт . 
showProduct = (product) ко колбек*/

const makeProduct = (name, price, callback) => {
  const product = {
    name,
    price,
    id: Math.random(),
  };
  callback(product);
  //   console.log(product);
};
const showProduct = product => {
  console.log(product);
};

makeProduct('iphone', 1000, showProduct);
