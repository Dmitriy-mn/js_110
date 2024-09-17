/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function logItems(items) {
//     console.log(items);
//     for (let i = 0; i < items.length; i += 1) {
//       console.log(`${i + 1} - ${items[i]}`);
//     }
//   }


// const logItems = (array) => {
//     array.forEach((item, index) => console.log(`${index + 1} - ${item}`))
// }





// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);








/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }




// const printContactsInfo = (obj) => {
//     const namesArr = obj.names.split(",");
//     const phonesArr = obj.phones.split(",");
   
//     namesArr.forEach((item, i) => {
//         console.log(`${item}: ${phonesArr[i]}`);
//     })
// }




// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });







/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }


// const calculateAverage = (...args) => {
//     let total = 0;

//     args.forEach(item => total += item);
//     return total / args.length;
// }





// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2






// ------------------------------------------------ 4

/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];
  
/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */
  
// const getModels = (cars) => {
//     const res = [];

//     cars.forEach(car => res.push(car.model))
//     return res;
// }

// const getModels = (cars) => {
//     return cars.map(car => car.model);
// }
// const getModels = (cars) => cars.map(car => car.model);

// console.log(getModels(allCars));







/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */
  
// const makeCarsWithDiscount = (cars, discount) => cars.map(car => ({ ...car, price: car.price * (1 - discount) }))



// console.table(makeCarsWithDiscount(allCars, 0.2));






// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
  
/*
* Збільшуємо кількість годин гравця за id
*/
// const playerIdToUpdate = "player-3";


// const newArr = players.map(player => {
//     if(player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100
//         }
//     }

//     return player;
// })


// console.table(newArr);




// ------------------------------- 5

/**
 * Метод flatMap
 */

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.flatMap(item => item.tags)

// console.log(tags);









