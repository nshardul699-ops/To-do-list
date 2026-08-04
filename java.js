let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector(".addbtn")

function helper(){
    if(inp.value.trim() == ""){
        return;
    }
    let lst = document.createElement("li");
    lst.innerText = inp.value;
    let dbtn = document.createElement("button");
    dbtn.innerText = "DELETE";
    dbtn.className = "delbtn";
    lst.appendChild(dbtn);
    ul.appendChild(lst);
    inp.value = "";
}

btn.addEventListener("click", helper)

ul.addEventListener("click", function (event){
    if(event.target.nodeName === "BUTTON"){
        let de = event.target.parentElement;
        de.remove();
    }
})
inp.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        helper();
    }
})
