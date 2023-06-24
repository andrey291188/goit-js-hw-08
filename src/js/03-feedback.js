import throttle from "lodash.throttle";

const inputForm = document.querySelector(".feedback-form");
const inputSubmit = document.querySelector(".feedback-form");

const STORY_KEY = "feedback-form-state";
const dataForm = {};
const messageSave = JSON.parse(localStorage.getItem(STORY_KEY));

inputForm.addEventListener("input", throttle(createKey, 500));
inputSubmit.addEventListener("submit", onFormSubmit);

function onFormSubmit (evt) {
    evt.preventDefault();
    console.log(messageSave)
    evt.target.reset();
    localStorage.removeItem(STORY_KEY)
}

function createKey (evt) {
 
    if (messageSave){
        dataForm.email = messageSave.email;
        dataForm.message = messageSave.message
    } 
        dataForm[evt.target.name] = evt.target.value; 
        textAreaInput()
    
}

function textAreaInput () { 
     localStorage.setItem(STORY_KEY, JSON.stringify(dataForm)); 
}

function textArea (messageSave) {
   
    if (messageSave) {
        inputForm.email.value = messageSave.email ?? "";
        inputForm.message.value = messageSave.message ?? "";  
    }
}

 textArea(messageSave)





