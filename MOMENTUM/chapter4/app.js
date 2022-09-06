const loginForm = document.querySelector("#login-form");
const loginValue = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();

    const username = loginValue.value;

    loginForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    // show the greeting
    paintGreeting(savedUsername);
}