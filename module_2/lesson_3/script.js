/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 50;
// let msg;

// if(minutes > 0) {
//     msg = `${hours} г. ${minutes} хв.`;
// } else {
//     msg = `${hours} г.`;
// }
// console.log(msg);

// const msg = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;
// console.log(msg);




/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const deadline = 1;

// switch(deadline) {
//     case 0:
//         console.log("Today");
//         break;
//     case 1:
//         console.log("Tomorrow");
//         break;
//     case 2:
//         console.log("Overmorrow");
//         break;
//     default:
//         console.log("Date in the future");
// }





/*
 * Напиши скрипт выбора опції доставки товару.
 * Опция зберігається у змінній option: 1 - самовывоз, 2 - курьер, 3 - пошта
 *
 * У змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Курьер доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправленна сьогодні'
 * - 'Вам передзвонить менеджер'
 */

// const option = 3;
// let message;

// switch(option) {
//     case 1:
//         message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
//         break;
//     case 2:
//         message = "Курьер доставить замовлення завтра з 9:00 до 18:00";
//         break;
//     case 3:
//         message = "Посилка буде відправленна сьогодні";
//         break;
//     default:
//         message = "Вам передзвонить менеджер";
// }

// console.log(message);




// -------------------------------------- 6

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "pro";
// let canConnect;

// //       true
// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// const sub = "vip";

// const canConnect = sub === "pro" || sub === "vip";

// console.log("can connect", canConnect);




/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */


// const isOnline = true;
// const isFriends = true;
// const isDnd = false;

// //                                          true
// const canChat = isOnline && isFriends && !isDnd;

// console.log("can chat", canChat);






