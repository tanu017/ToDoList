function addTask() {
    let input = document.getElementById("taskInput").value;
    if (input === "") return;
    
    let li = document.createElement("li");
    li.textContent = input;
    
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = ""; 
}

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "aquamarine";
}

function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
