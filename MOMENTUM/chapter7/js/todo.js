const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newObjecToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.id = newObjecToDo.id  ;
    span.innerText = newObjecToDo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSumbit(event){
    event.preventDefault();
    const newObject = {
        id : Date.now(),
        text : toDoInput.value
    };

    toDos.push(newObject);

    paintToDo(newObject);
    saveToDos();

    toDoInput.value = "";
}


toDoForm.addEventListener("submit",handleToDoSumbit);

const savedToDos = localStorage.getItem("todos");

if(savedToDos) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}