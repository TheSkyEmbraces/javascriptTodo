const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function onLoginBtnClick(event){ //2번에서 키값이 null이면 이리 와서 키값을 생성하고 로컬스토리지에 저장   2-1번
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //키값, 저장할 속성, 정보, 변수
    paintGreetings(username)
}

function paintGreetings(username){  //2번에서 키값이 있으면 이리 와서 키값을 가지고 h1을 호출    2-2번
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);  //자바스크립트가 유저 키를 가지고 있나 확인  1번

if(savedUsername === null){ //키값을 가지고 있는지 확인 하고 동작하는 부분    2번
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginBtnClick);
}else{
    paintGreetings(savedUsername);
}