/* // const basicLightbox = require('basiclightbox');

const instance = basicLightbox.create(
  `
  <div class="lightbox-content">
    <img src="https://picsum.photos/200/300" alt="Зображення">
    <p>Опис зображення</p>
  </div>
`,
  {
    className: 'my-lightbox', // Налаштування класу CSS
    closeOnClick: false, // Вимкнення закриття при натисканні на фон
    closeEsc: true, // Увімкнення закриття при натисканні Esc
    onShow: () => {
      console.log('Lightbox відкрито!');
    },
    onClose: () => {
      console.log('Lightbox закрито!');
    },
  }
);

instance.show();
 */
/**
 * Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username
 */
/* 
const user = {
  id: 1,
  username: 'harry_potter',
  profile: {
    name: 'Harry',
    surname: 'Potter',
    age: 25,
  },
};

const {
  username,
  profile: { name, surname, age },
} = user;
console.log(username);

console.log(`Ім'я користувача: ${name}`);
console.log(`Прізвище користувача: ${surname}`);
console.log(`Ім'я користувача (за нікнеймом): ${username}`);
 */
/**
 * Допиши функцію таким чином, щоб кожна властивість
 * об'єкта product була незалежним параметром
 */

/* const product = {
  name: 'Smart TV',
  price: 25000,
  category: 'Electronics',
  details: {
    brand: 'Samsung',
    color: 'Black',
    weight: '15.5',
  },
};

function displayProductInfo(info = {}) {
  const { name, price, category, brand, color, weight } = info;

  console.log(`Назва товару: ${name}`);
  console.log(`Ціна: ${price} грн`);
  console.log(`Категорія: ${category}`);
  console.log('Деталі:');
  console.log(`- Бренд: ${brand}`);
  console.log(`- Колір: ${color}`);
  console.log(`- Вага: ${weight} кг`);
}
displayProductInfo(product); */

/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
/*  */
/* function calculateHousePerimeter(a, b, c, d) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const perimeter = calculateHousePerimeter(10, 15, 10, 15);
console.log(`Периметр будинку: ${perimeter}`);

const houseData = {
  sideInfo: {
    sideA: 10,
    sideB: 15,
    sideC: 10,
    sideD: 15,
  },
  hasRoof: true,
};

const calculatePerimeter = (data = {}) => {
  const {
    sideInfo: { sideA, sideB, sideC, sideD },
    ...othetInfo
  } = data;
  return sideA + sideB + sideC + sideD;
};
calculatePerimeter(houseData);
const perimeter2 = calculatePerimeter(houseData);
console.log(' Perimeter2:', perimeter2); */
/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

//  <li class="product-item" data-id="1">
//    <img
//      src="https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG"
//      alt=""
//      class="product-ill"
//    />
//    <h2 class="product-name">Monitor</h2>
//    <p class="product-price">
//      Price: <span>3000</span>
//    </p>
//  </li>;
/* const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];
// 1. Обрали список з майбутніми картками товарів
const productListEl = document.querySelector('.product-list');
// 2. Згенерували шаблонний рядок із розміткою карточок товарів
const markup = products.reduce((html, product) => {
  return (html += `
   <li class="product-item" data-id="${product.id}">
    <img
      src="${product.img}"
      alt="${product.name}"
      class="product-ill"
    />
    <h2 class="product-name">${product.name}</h2>
    <p class="product-price">
      Price: <span>${product.price}</span>
    </p>
  </li>
 `);
}, '');
// console.log(markup);
// 3. Додали розмітку в HTML
productListEl.insertAdjacentHTML('beforeend', markup);

// 4. Додали обробник події для кліку на картку
productListEl.addEventListener('click', onProductClick);

function onProductClick(event) {
  if (event.target === event.currentTarget) return;

  const productCardEl = event.target.closest('.product-item');
  // if (!productCardEl) return;

  const id = productCardEl.dataset.id;
  const currentProduct = products.find(product => {
    return product.id === Number(id);
  });

  // console.log(currentProduct);

  // Використали бібліотеку для додавання модальног вікна
  const instance = basicLightbox.create(
    `
  <div class="modal">
    <img
      src="${currentProduct.img}"
      alt="${currentProduct.name}"
    />
    <h2>${currentProduct.name}</h2>
    <p>
      Price: <span>${currentProduct.price}</span>
    </p>
    <p>${currentProduct.description}</p>
  </div>
`
  );
  instance.show();
}
 */

/* Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
<div>
      <p class="taskTitle">ЗАДАЧА 2</p>
      <button id="swapButton">SWAP ME</button>
      <input id="leftSwapInput" type="text" value="???" />
      <input id="rightSwapInput" type="text" value="!!!" />
    </div> */
/* 
const refs = {
  swapButton: document.querySelector('#swapButton'),
  leftSwapInput: document.querySelector('#leftSwapInput'),
  rightSwapInput: document.querySelector('#rightSwapInput'),
};

refs.swapButton.addEventListener('click', onSwapButtonClic);

function onSwapButtonClic(event) {
  const leftValue = refs.leftSwapInput.value;
  refs.leftSwapInput.value = refs.rightSwapInput.value;
  // refs.leftSwapInput.value = reihtValue;
  // refs.rightSwapInput.value = leftValue;
} */

/* 
<div>
      <p class="taskTitle">ЗАДАЧА 3</p>
      <input id="passwordInput" type="text" />
      <button id="passwordButton">Приховати</button>
    </div>
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду. */

/* const refs = {
  buttonEl: document.querySelector('#passwordButton'),
  taskTitleEl: document.querySelector('.taskTitle'),
};

refs.buttonEl.addEventListener('click', onBbtnElClick);
function onBbtnElClick(event) {
  if (refs.buttonEl.textContent === 'Розкрити') {
    refs.taskTitleEl.style.display = 'block';
    refs.buttonEl.textContent = 'Приховати';
    return;
  }

  refs.taskTitleEl.style.display = 'none';
  refs.buttonEl.textContent = 'Розкрити';
}
 */

/* При натискані на кожну з кнопок підсумовуються результати з data атирибутів. 

За натисканям на кнопку "Вивести результат" виводиться сума значення а 
також статистика, інформація про те яка кнопка була натиснута і скільки разів.
div class="wraper">
      <div>
        <div>
          <p class="taskTitle">Задача 8</p>
        </div>
        <div class="statList">
          <button class="calcButton" data-number="5">Button #1</button>
          <button class="calcButton" data-number="2">Button #2</button>
          <button class="calcButton" data-number="10">Button #3</button>
          <button class="calcButton" data-number="50">Button #4</button>
          <button class="calcButton" data-number="0">Button #5</button>
          <button class="calcButton" data-number="20">Button #6</button>
        </div>
        <button id="resultButton">Вивести результати</button>
        <div id="resultSection"></div>
      </div>
    </div> */

/* const refs = {
  statList: document.querySelector('.statList'),
  resultButton: document.querySelector('#resultButton'),
  resultSection: document.querySelector('#resultSection'),
};
let sum = 0;
const statBtnClick = {};

refs.statList.addEventListener('click', onStatListBtnClick);

function onStatListBtnClick(event) {
  const number = Number(event.target.dataset.number);
  sum += number;
  statBtnClick[event.target.textContent] =
    (statBtnClick[event.target.textContent] || 0) + 1;
  console.log(statBtnClick); */
// }

/* localStorage.setItem('ui-theme', 'light');
console.log(localStorage);
const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(settings));

const savedSettings = localStorage.getItem('settings');
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object
 */

const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const localStorageKey = 'goit-example-message';

textarea.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
