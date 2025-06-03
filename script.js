function addTask() {
    let input = document.getElementById("taskInput").value;
    if (input === "") return;
    
    let li = document.createElement("li");
    li.textContent = input;
    
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "https://st2.depositphotos.com/1041273/5828/v/950/depositphotos_58283431-stock-illustration-trash-can-icon.jpg";
    deleteBtn.alt = "Delete";
    deleteBtn.style.width = "20px"; 
    deleteBtn.style.cursor = "pointer";

    deleteBtn.onclick = function() {
        li.remove();
    };
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding = "12px";

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = ""; 
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        addTask(); 
    }
});

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "aquamarine";
}

function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
