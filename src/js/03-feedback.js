import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const KEY_STORAGE = "feedback-form-state";
const userFeedback = {};

populateInput();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(KEY_STORAGE);
}



function onFormInput(event) {
    userFeedback[event.target.name] = event.target.value;
    console.log(userFeedback);

    localStorage.setItem(KEY_STORAGE, JSON.stringify(userFeedback));
}

function populateInput() {
    const savedData = localStorage.getItem(KEY_STORAGE);
    const parsedData = JSON.parse(savedData);

    if (parsedData) {
        form.elements.email.value = parsedData.email;
        form.elements.message.value = parsedData.message;
        console.log(parsedData);
    }
}

