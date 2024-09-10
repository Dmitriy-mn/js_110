// ------------------------------- Доступ до вкладених властивостей


// const obj = {
//     name: "Alice",
//     age: 25,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }


// obj.skills.js = true;

// console.log(obj);














// -------------------------------- 5

/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premium: true
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for(const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;

//     const keys = Object.keys(obj);
//     for(const key of keys) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// foo(user);







/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//     Kate: 130,
//     Alice: 160,
//     Petya: 100
// }

// function summa(obj) {
//     let total = 0;

//     const values = Object.values(obj);
//     for(const value of values) {
//         total += value;
//     }
//     return total;
// }

// console.log(summa({}));




