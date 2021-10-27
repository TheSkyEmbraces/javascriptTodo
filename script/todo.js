const toDoForm = document.querySelector("#todo-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "toDos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = " ❌ "
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); //append는 항상 맨 마지막에
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; //인풋의 벨류값을 비우고 2번
    const newToDoObj = {
        text: newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj); // newToDo의 정보를 배열에 담은 다음에 (li) 3번
    paintToDo(newToDoObj); //화면에 ToDo를 만들어준다. 4번
    saveToDos(); // 그것을 로컬스토리지에 저장한다 5번
}

toDoForm.addEventListener("submit", handleToDoSubmit) // 폼을 서브밋 하면 1번

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}