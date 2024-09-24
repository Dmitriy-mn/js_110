
/**
 * -------------------------
 */

  
/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */


// const chopShop = {
//     stones: [
//       { name: "Emerald", price: 1300, quantity: 4 },
//       { name: "Diamond", price: 2700, quantity: 3 },
//       { name: "Sapphire", price: 1400, quantity: 7 },
//       { name: "Ruby", price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find(item => item.name === stoneName);
//         if(!stone) {
//             return `${stoneName} not found`;
//         }
//         return stone.price * stone.quantity;
//     }
// };


// console.log(chopShop.calcTotalPrice("lalala"));




// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.


// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log(`Авто зупинилось`);
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);









// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this


// const SPEED = 60;

// const bmw = {
//     speed: 30,
//     brand: "bmw"
// }

// const audi = {
//     speed: 70,
//     brand: "audi"
// }

// function speedLimit(maxSpeed) {
//     if(this.speed <= maxSpeed) {
//         return `Автомобіль ${this.brand} рухається з безпечною швидкість`;
//     }
//     return `Автомобіль ${this.brand} перевищує швидкість`;
// }


// console.log(speedLimit.call(bmw, SPEED));

// const foo = speedLimit.bind(audi, SPEED);
// console.log(foo());



// const library = {
//     books: {
//       firstBooks: 35,
//       secondBooks: 125,
//     },
//     logBookCount() {
//         // console.log(this);
        
//       console.log(this.books.secondBooks);
//     },
//   };
  
// const showBooks = library.logBookCount.bind({ books: {secondBooks: 724} }); /*помилка*/

// showBooks();



