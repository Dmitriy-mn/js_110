/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */


const NOTIFICATION_DELAY = 3000;
const notification = document.querySelector(".js-alert");
let timerId = null;

notification.addEventListener("click", onNotificationClick);

showNotification();

function showNotification() {
    notification.classList.add("is-visible");

    timerId = setTimeout(() => {
        console.log("hide");
        hideNotification();
    }, NOTIFICATION_DELAY);
}

function onNotificationClick() {
    hideNotification();
    clearTimeout(timerId);
}

function hideNotification() {
    notification.classList.remove("is-visible");
}
