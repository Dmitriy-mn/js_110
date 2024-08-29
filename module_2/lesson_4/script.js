

/**
 * Форматування посилання
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */


// let link = "https://my-site.ua/about";


// if(!link.endsWith("/") && link.includes("my-site")) {
//   link += "/";
// }

// console.log(link);







// -------------------------------------- 4

/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, 
 * але тільки якщо число кратне 5.
 */

// const a = 20;
// const b = 100;

// for(let i = a; i <= b; i++) {
//   //   20 % 5 = 0 = false
//   if(!(i % 5)) {
//     console.log(i);
//   }
// }

// for(let i = b; i >= a; i--) {
//   if(!(i % 5)) {
//     console.log(i);
//   }
// }



/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому два парних числа - 2 і 4, їх сума 6.
 */


const min = 0;
const max = 5;
let total = 0;


// for(let i = min; i <= max; i++) {
//   if(i % 2 === 0) {    
//     total += i;
//   }
// }
// console.log(total);


for(let i = min; i <= max; i++) {
  if(i % 2 === 0) {    
    total += i; // 2 + 4 
  }
}
console.log(total); 





// for(let i = min; i <= max; i++) {
//   if(i % 2 !== 0) {
//     // console.log(i);
//     continue;
//   }
  
//   total += i
// }

// console.log(total);





