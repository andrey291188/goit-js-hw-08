import throttle from "lodash.throttle";

const inputForm = document.querySelector(".feedback-form");
const inputSubmit = document.querySelector(".feedback-form");

const STORY_KEY = "feedback-form-state";
const dataForm = {};
const messagSave = JSON.parse(localStorage.getItem(STORY_KEY));

inputForm.addEventListener("input", throttle(createKey, 500));
inputSubmit.addEventListener("submit", onFormSubmit);

function onFormSubmit (evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(STORY_KEY)
}

function createKey (evt) {
    dataForm[evt.target.name] = evt.target.value; 
    localStorage.setItem(STORY_KEY, JSON.stringify(dataForm));
}

function textArea (messagSave) {
    if (messagSave) {
        inputForm.email.value = messagSave.email || "";
        inputForm.message.value = messagSave.message || "";
    }
}

textArea(messagSave)






