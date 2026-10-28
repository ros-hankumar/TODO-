const task = document.getElementById("task");
const add = document.getElementById("add");
const list = document.getElementById("list");

add.addEventListener("click", function() {

    if (task.value == "") {
        return;
    }

    let li = document.createElement("li");

    li.innerText = task.value;

    list.appendChild(li);

    li.addEventListener("click", function() {
        li.remove();
    });

    task.value = "";

});
