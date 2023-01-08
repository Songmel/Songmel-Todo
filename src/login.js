const loginSplash = document.querySelector(".login-splash");
const loginForm = loginSplash.querySelector(".login-form");
const loginInput = loginSplash.querySelector(".login-form__input");
const loginBtn = loginSplash.querySelector(".login-form__btn");
const greeting = document.querySelector(".greeting");

loadName();

function gettingUserName(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem("userName",userName);
    loginSplash.classList.add("hidden");
    greeting.innerText = `Hello ${userName}`; 
}

function loadName() {
    const userName = localStorage.getItem("userName");
    if(userName !== null) {
        loginSplash.classList.add("hidden");
        loginSplash.remove();
        greeting.innerText = `Hello ${userName}`;
    } else {
        loginSplash.classList.remove("hidden");
    }
}

loginForm.addEventListener("submit", gettingUserName);