import axios from "axios";

import './style.css'

const BASE_URL = "http://localhost:3001/todos";

const form = document.querySelector(".todo__form");
const container = document.querySelector(".list");

form.addEventListener("submit", handleSubmit);
container.addEventListener("click", handleUpdate);
container.addEventListener("click", handleDelete);


async function serviceTodos(url = BASE_URL, options = {}) {
    const result = await axios(url, options);
    return result.data;
}


function createMarkup(arr) {
    return arr.map(({ id, title, completed }) => `
        <li class="list__item" data-id="${id}">
            <input type="checkbox" class="list__checkbox" ${completed ? "checked" : ""}>
            <h2 class="list__title">${title}</h2>
            <button class="list__btn">X</button>
        </li>
    `).join("")
}


serviceTodos(BASE_URL)
    .then(res => container.insertAdjacentHTML("beforeend", createMarkup(res)))
    .catch(error => console.log(error.message))


async function handleSubmit(event) {
    event.preventDefault();

    const { todo } = event.currentTarget.elements;
    
    if(!todo.value.trim()) {
        return;
    }

    try {
        const data = await serviceTodos(BASE_URL, {
            method: "POST",
            data: {
                title: todo.value,
                completed: false
            }
        })
        
        container.insertAdjacentHTML("beforeend", createMarkup([data]))
    } catch(error) {
        alert(error.message)
    } finally {
        event.target.reset();
    }
}


async function handleUpdate(event) {
    if(!event.target.classList.contains("list__checkbox")) {
        return;
    }

    event.preventDefault();

    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;
    
    try {
        const data = await serviceTodos(`${BASE_URL}/${id}`, {
            method: "PATCH",
            data: {
                completed: event.target.checked
            }
        })

        event.target.checked = data.completed;
    } catch(error) {
        alert(error.message)
    }
}


async function handleDelete(event) {
    if(!event.target.classList.contains("list__btn")) {
        return;
    }

    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;

    try {
        await serviceTodos(`${BASE_URL}/${id}`, {
            method: "DELETE"
        })

        parent.remove();
    } catch(error) {
        console.log(error);
    }

}

