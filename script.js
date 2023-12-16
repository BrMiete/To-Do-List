const INPUT = document.getElementById("input-box");
const LIST = document.getElementById("contenedor-list");

function addTask(){
    if(INPUT.value === ''){
        alert("Debes escribir una tarea!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = INPUT.value;
        LIST.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    INPUT.value = "";
    guardarTareas();
}

LIST.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        guardarTareas();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        guardarTareas();
    }
}, false);

function guardarTareas(){
    localStorage.setItem("data", LIST.innerHTML);
}

function mostrarTareas(){
    LIST.innerHTML = localStorage.getItem("data");
}
mostrarTareas();