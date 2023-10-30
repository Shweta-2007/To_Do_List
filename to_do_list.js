let inputBox = document.getElementById("input-box")

let ulEl = document.getElementById("ul-el")


function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        ulEl.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}
ulEl.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", ulEl.innerHTML);
}
function showtask() {
    ulEl.innerHTML = localStorage.getItem("data");
}
showtask();
