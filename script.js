const inp = document.getElementById("newTask");
const list = document.getElementById("taskList");

function add() {
    if (inp.value === "") {
        alert("Enter something first!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); save();
    }
    inp.value = "";
}

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
}, false)
inp.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){
        add();
    }
})

const save = () => {
    localStorage.setItem("data", list.innerHTML);
}

const load = () => {
    list.innerHTML = localStorage.getItem("data")
}
// console.log(localStorage.getItem("data"))
load();