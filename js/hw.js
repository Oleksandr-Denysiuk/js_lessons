// function calculateEngravingPrice(message, pricePerWord) {
//   const stringToArray = message.split("");
//   const price = stringToArray.lenght * pricePerWord;
//   return price;
// }

// --------сума всіх чисел масиву
// const cart = [12, 23, 43, 22, 95, 56, 34, 55];
// зробити змінну до цикла
// let total = 0;
// перебор (фор)кожного елемента з додаванням до тотал
// for (let i = 0; i < cart.length; i +=1) {
//   total += cart[i];
// додавання до кожного елемента довільного рядка
//   cart[i] += "-str";
//   console.log(cart[i]);
// }

// перебор (фор оф)кожного елемента з додаванням до тотал
// for (const value of cart) {
//   total += value;
// }
// console.log("total: ", total);

// перебор (фор оф)кожного елемента з додаванням 20%
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.2);
// }
// console.log(cart);

// ---------знайти суиу всіх парних чисел  в масиві
// const numbers = [1, 3, 8, 12, 17, 23, 29, 32, 35, 44, 46, 54];
// створити змінну тотал
// перебрати масив
//в кожній ітерації перевірити на парність
// плюсуєм парні до тотал
// let total = 0;
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//     console.log(number);
//   }
// }
// console.log("total: ", total);
//
// алгоритміка "ОТ ОБРАТНОГО"
// for (const number of numbers) {
//   if (number % 2 !== 0) {
// console.log(number, " - непарне");
// continue;
//   }
//   total += number;
//   console.log(number, " - парне");
// }
// console.log("total: ", total);

// ----------скрипт пошуку логіна
//якщо логіна нема вивести повідомлення "Користувач не знайдений!"
//якщо логін є вивести повідомлення "Користувач знайдений!"
//
//  const logins = ["m4ngoDoge", "k1widab3st", "poli1scute", "aj4xth3m4n"];
// const loginToFind = "poli1scute";
// let message = `Користувач ${loginToFind} не знайдений.`;
// цикл фор
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log("login: ", login, login === loginToFind);
//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдений!`;
//     break;
//   }
//   console.log(message);
// }
// цикл фор оф
// for (const login of logins) {
//   console.log("login: ", login, login === loginToFind);
//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдений!`;
//     break;
//   }
// }
// console.log(message);
// теренарний + метод інклюдес
// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдений!`
//   : `Користувач ${loginToFind} не знайдений.`;
// console.log(message);

// --------знайти саме менше число з масива
// const numbers = [12, 32, 5, 56, 87, 31, 44];
// let smalestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smalestNumber) {
//     smalestNumber = number;
//   }
// }
// console.log("Smalest number: ", smalestNumber);

// ------ hw 13/32
// const title = "Arrays for beginers";
// function slugify(title) {
//   return title.toLowerCase().split(" ").join("-");
// }
// slugify("Arrays for beginers");

// ----------- обєднання двох масивів за довжиною
// function makeArray(firstArray, secondArray, maxLength) {
// const firstArray = [1, 3, 5, 6, 34];
// const secondArray = [33, 43, 54, 65, 66];
// maxLength = 9;

// let allArrays2;

// let allArrays = firstArray.concat(secondArray);
// console.log(allArrays);
// console.log(allArrays.length);

// if (allArrays.length >= maxLength) {
//   allArrays2 = allArrays.slice(0, maxLength);
// }
// console.log(allArrays2);

// --------- робота з методом  SPLICE (деструктивний метод, він єдиний змінює масив,
// а не створює новий, як це роблять інші методи)
// const cards = [
//   "Картка-1",
//   "Картка-2",
//   "Картка-3",
//   "Картка-4",
//   "Картка-5",
//   "Картка-5",
// ];
// console.log(cards);
// const cartToRemove = "Картка-3";
// let index = cards.indexOf(cartToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.log(cards);

// const cardToInsert = "Картка-7";
// cards.splice(index, 0, cardToInsert);
// console.log(cards);

// const cardToUpdate = 555;
// index = 3;
// cards.splice(index, 1, cardToUpdate);
// console.table(cards);

// ---------- функція для знаходження суми всіх елементів масиву

// const calculateTotalPrice = function (items) {
//   console.log("items всередині функції");

//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
// const t1 = calculateTotalPrice([1, 3, 5, 6]);
// console.log(t1);

// ---------- функція  пошуку логіна
//якщо логіна нема вивести повідомлення "Користувач не знайдений!"
//якщо логін є вивести повідомлення "Користувач знайдений!"
// 1
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Користувач ${loginToFind} знайдений!`
//     : `Користувач ${loginToFind} не знайдений.`;
// };
// 2
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of logins) {
//     if (login === loginToFind) {
//       return `Користувач ${loginToFind} знайдений!`;
//     }
//     return `Користувач ${loginToFind} не знайдений.`;
//   }
// };

// const logins = ["m4ngoDoge", "k1widab3st", "poli1scute", "aj4xth3m4n"];
// const loginToFind = "poli1scute";
// console.table(logins);
// console.log(findLogin(logins, loginToFind));

// -------- функція changeCase(string) яка міняє регістр
// кожного символа на протилежний

// const changeCase = function (string) {
//   const letters = string.split("");
//   console.log(letters);
//   let invertedString = "";

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();
//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase("qWeRty"));
// console.log(changeCase("AjakS"));
// console.log(changeCase("manGO"));

// -------
// function slugify(title) {
//   return title.toLowerCase().split(" ").join("-");
// }
// console.log(slugify("Arrays for beginers"));
// slugify("Arrays for beginers");

// ------------arguments-----
// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 4, 5, 8));
// console.log(add(14, 22, 44, 65, 12, 3, 61));

// ----------- фільтрація чисел в двох масивах

// const filterNumbers = function (array, ...args) {
//   const uniqNumbers = [];

//   for (const element of args) {
//     if (array.includes(element)) {
//       console.log(element, " присутній в обох масивах.");
//       uniqNumbers.push(element);
//     }
//   }

//   return uniqNumbers;
// };

// console.log(filterNumbers([1, 3, 5, 12, 4], 2, 5, 7, 1, 11));

//  ------- hw 21/32

// function findLongestWord(string) {
//   const stringToArray = string.split(" ");
//   let longestWord = stringToArray[0];

//   for (const index of stringToArray) {
//     longestWord =
//       index.length > longestWord.length ? (longestWord = index) : longestWord;
//   }

//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// ------------
// ------------ ОБЄКТИ

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track1", "track2", "track3"],
//   //   trackCount: 3,
//   changeName(newName) {
//     console.log("--1--.this inside method: ", this);
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//     // this.trackCount = this.tracks.length;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };
// console.log(playlist.getTrackCount());
// playlist.changeName("Нове імя");
// console.log("--2.--", playlist);
// playlist.addTrack("Новий трек");
// console.log("--3.--", playlist);
// console.log(playlist.getTrackCount());

// --------hw7/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
//
// ------hw9/41
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// ------hw 10/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// -----hw 12/41
// function countProps(object) {
//   let propCount = 0;
//   console.log(propCount);

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   console.log(propCount);

//   //   return propCount;
// }
// countProps({ name: "Mango", age: 2 });
// console.log(countProps());

// ---------hw 13/41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// ----hw14/41

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const arrayProps = Object.keys(object);
//   for (const key of arrayProps) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// countProps({ name: "Mango", age: 2 });
// console.log(countProps());
// //
// -------hw 16/41 total salaries (sum of object values)
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salaryValues = Object.values(salaries);
//   for (const value of salaryValues) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// --------hw 18/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// // const productName = "Radar";
// function getProductPrice(productName) {
//   for (const product of products) {
//     console.log(product);

//     if (product === productName) {
//       console.log(product);
//       return product.price;
//     }
//     return null;
//   }
//   console.log(getProductPrice("Radar"));
// }

// ====================hw 19/41 =================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// getAllPropValues("price");

// function getAllPropValues(propName) {
//   const propValues = [];

//   for (const product of products) {
//     if (product[propName]) {
//       propValues.push(product[propName]);
//     }
//   }
//   console.log(propValues);
//   return propValues;
// }
//   ============== hw 20/41 ============
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// calculateTotalPrice("Radar");

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     console.log(product.name);

//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   console.log(totalPrice);

//   return totalPrice;
// }

// ================ знайти автора з самим великим рейтингом
// Деструктуризація масива
// const authors = {
//   poli: 4,
//   kiwi: 7,
//   ajax: 2,
//   mango: 9,
// };

// const entries = Object.entries(authors);

// console.log(entries);

// for (const [name, rating] of entries) {
//   // for (const entry of entries) {
//   // перший спосіб
//   //  const [name, rating] = entry;

//   // другий спосіб
//   //   const name = entry[0];
//   //   const rating = entry[1];
//   console.log(name, rating);
// }

// ========= hw 28/41======
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// console.log(allScores);
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);
// console.log(worstScore);

// ============ hw31/41 ======

// function add(...args) {
//   concole.log(args);
// }
// add(32, 6, 13, 19, 8);
// concole.log(add(32, 6, 13, 19, 8));

// ======== hw 33/41
// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);

// ===========hw 35/41
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     this.books.oldName = newName;

//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf);

// =========hw 41/41 =========
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { name } = newPotion;
//     for (const potion of this.potions) {
//       if (potion.name === name) {
//         return `Error! Potion ${name} is already in your inventory!`;
//       }
//     }
//     // додає зілля newPotion (вже об'єкт)
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     // console.log(potions);

//     // const potionIndex = this.potions.indexOf(potionName);
//     // console.log("potionIndex: ", potionIndex);

//     for (const potion of potions) {
//       if (potion.name === potionName) {
//         const potionIndex = potions.name.indexOf(potionName);

//         potions.splise(potionIndex, 1);
//       } else {
//         console.log(`Potion ${potionName} is not in inventory!`);
//         return `Potion ${potionName} is not in inventory!`;
//       }
//     }

//     this.potions.splice(potionIndex, 1);
//   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { name } = newPotion;
//     console.log(name);
//     for (const potion of this.potions) {
//       if (potion.name === name) {
//         return `Error! Potion ${name} is already in your inventory!`;
//       }
//     }
//     // додає зілля newPotion (вже об'єкт)
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
// const { potions } = this;
//   // const { name } = this;
//   console.table(potions);
//   console.log(potions.name);
//   const potionIndex = potions.indexOf(potionName);

//   console.log("potionIndex: ", potionIndex);

//   if (potionIndex === -1) {
//     return `Potion ${potionName} is not in inventory!`;
//   }

//   this.potions.splice(potionIndex, 1);
// },
// for (const potion of this.potions) {
//   if (potion.name === )
// }

//     for (const potion of this.potions) {
//       // console.log(potion);

//       // const potionIndex = this.potions.indexOf(potionName);

//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         console.log("potionIndex: ", potionIndex);

//         this.potions.splice(potionIndex, 1);
//       } else {
//         return `Potion ${potionName} is not in inventory!`;
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     // const potionIndex = this.potions.indexOf(oldName);
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     // if (potionIndex === -1) {
//     return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });

// atTheOldToad.removePotion("Speed potion");

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

// console.table(atTheOldToad.potions);

// ======++++++++++   MODULE 4 ++++++++++===========

// ===========  hw 4/48========
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, callback, errorMessage) {
//     if (this.pizzas.includes(pizzaName)) {
//       console.log(callback(pizzaName));
//       return callback(pizzaName);
//     } else {
//       console.log(
//         `Error! There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//       return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ===========  hw 5/48

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach((number) => (totalPrice += number));

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ==========    SORT   =========
//  кастомне сортування складних типів

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 320, online: false },
//   { id: "player-2", name: "Poli", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, online: true },
// ];
// console.table(players);

// const sortedBestPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );
// console.table(sortedBestPlayers);

// const sortedWorstPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
// );
// console.table(sortedWorstPlayers);

// const sortByName = [...players].sort((a, b) => {
//   const result = a.name[0] > b.name[0];

//   if (result) {
//     return 1;
//   }
//   if (!result) {
//     return -1;
//   }
// });
// console.table(sortByName);
//  ============== chaining - ланцюжок викликів==========
// const numbers = [1, 5, 3, 2, 4];

// варіант з трьома змінними
// const greaterThenTwo = numbers.filter((num) => num > 2);
// console.log(greaterThenTwo);

// const multyplyByThree = greaterThenTwo.map((num) => num * 3);
// console.log(multyplyByThree);

// const sorted = multyplyByThree.sort((a, b) => a - b);
// console.log(sorted);

// варіант ланцюжка
// const sorted = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .sort((a, b) => a - b);

// console.log(sorted);

// // ================= метод concat з бібліотеки lodash
// const newNumbers = _.concat(numbers, 9, 8);
// console.log(newNumbers);

//    ============ hw 13/48

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       console.log(numbers[i]);
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray; // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// ============== 14/48 =======

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// ============= 15/48  ===========

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);
// console.log(titles);

// // ============= 16/48  ==========
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// Change code below this line

// const genres = books.flatMap((book) => book.genres);

// ====================  17/48

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = (users) => users.map((user) => user.name);
// console.log(getUserNames());

// ===========  19/48

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ============  20/48

//

// =========== 24/48

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
// ];

// // Change code below this line
// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));
// // Change code above this line
// getUsersWithFriend();

// const getFriends = (users) => users.flatMap((user) => user.friends);

//  ============== 35/48

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total + player.playtime / player.gamesPlayed,
//   0
// );

// console.table(totalAveragePlaytimePerGame);

//  ============= 45/48
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);

// ============ 47/48

// Change code below this line
// const getSortedFriends = (users) => users.flatMap((user) => user.friends);
// .filter((friend, index, array) => array.indexOf(friend) === index);
// .sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users));

// //  ============= 48/48

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((user) => user.gender === gender)
//     .reduce((total, number) => total + number.balance, 0);

//    module 5

// ============ hw  10/20

// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ============  hw 11/20
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// // ======= hw 13/20

// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// ================  hw 16/20
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//     } else {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//  =============  hw 20/20

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   blacklistedEmails;

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     this.blacklistedEmails.some((x) => x === email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// ====================== module 6

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// ===
// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// =====
const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);
