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
