/* Знайти імена всіх користувачів: */
/* const users = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
];

const faundName = users => users.map(user => user.name);

console.log(faundName(users));
 */

/* /* /* Вивести імена користувачів, які мають вік більше 25 років: */
/* const users = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
];
const foundUsersAge = users =>
  users.filter(user => user.age > 25).map(user => user.name);
console.log(foundUsersAge(users));
 */
/* 
Порахувати загальну кількість користувачів із заданим ім'ям: */
/* const users = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'John', age: 35 },
];

const countTotalNumberOfUsers = (users, name) =>
  users.filter(user => user.name === name).length;
console.log(countTotalNumberOfUsers(users, 'Elis'));
console.log(countTotalNumberOfUsers(users, 'John'));
 */

/* Вивести список користувачів, відсортованих за спаданням кількості їх друзів: */
/* const users = [
  { name: 'John', friends: ['Alice', 'Bob'] },
  { name: 'Alice', friends: ['John', 'Bob', 'Charlie'] },
  { name: 'Bob', friends: ['John'] },
];
 */
/* const sortByDescendingFriendCount = users =>
  users.toSorted((a, b) => b.friends.length - a.friends.length);
console.log(sortByDescendingFriendCount(users)); */

// Порахувати загальну кількість друзів для кожного користувача та вивести її:

/* const friendsCount = users.map(user => ({
  name: user.name,
  friendsCount: user.friends.length,
}));

console.log(friendsCount);
 */

/* const user = {
  username: 'Victor',
  showName() {
    // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
    console.log(this.username);
  },
};

user.showName();
 */

/* class Car {
  static #maxPrice = 50000;

  constructor(params) {
    this.price = params.price;
  }
  static checkPrice(price) {
    if (price > Car.#maxPrice) {
      return 'Error! Price exceeds the maximum';
    } else {
      ('Success! Price is within acceptable limits');
    }
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
 */

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, access }) {
    super(email);
    this.access = access;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
