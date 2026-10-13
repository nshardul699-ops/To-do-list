let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector(".addbtn");

// 1. Function to save the current HTML of the list to the browser
function saveData() {
    localStorage.setItem("savedTasks", ul.innerHTML);
}

// 2. Function to load the saved HTML when the page refreshes
function loadTasks() {
    if (localStorage.getItem("savedTasks")) {
        ul.innerHTML = localStorage.getItem("savedTasks");
    }
}

function helper() {
    if (inp.value.trim() == "") {
        return;
    }
    let lst = document.createElement("li");
    
    // Using innerText for the task, but we need a space before the button
    lst.innerText = inp.value + " "; 
    
    let dbtn = document.createElement("button");
    dbtn.innerText = "DELETE";
    dbtn.className = "delbtn";
    
    lst.appendChild(dbtn);
    ul.appendChild(lst);
    inp.value = "";
    
    // 3. Save the updated list after adding a new task
    saveData(); 
}

btn.addEventListener("click", helper);

ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let de = event.target.parentElement;
        de.remove();
        
        // 4. Save the updated list after a task is removed
        saveData(); 
    }
});

inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        helper();
    }
});

// 5. Call loadTasks immediately so saved items appear on load
loadTasks();