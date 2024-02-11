var qtdtask = 0;
var taskbox = document.querySelector(".taskbox");

function adicionarTarefa() {     // Aciona pop-up
    taskbox.style.display = "block";
    let taskinput = document.getElementById('taskinput');
    taskinput.focus();
}

function taskAdd() {             // Add task à lista
    let tasktext = document.getElementById('taskinput');
    let taskprio = "";
    let lowprioradio = document.getElementById('lowprio');
    // Ainda não sei JQuery, então vou fazer do jeito que entendo.
    if (lowprioradio.checked) {
        taskprio = "Baixa"
    } else if (document.getElementById('midprio').checked) {
        taskprio = "Média"
    } else {
        taskprio = "Alta"
    }

    if (qtdtask < 6) {
        const d = new Date();
        let h = (d.getUTCHours() - 3);
        let m = d.getUTCMinutes();
        let lista = document.getElementsByClassName("list")[0];
        let item = document.createElement("li");
        if (tasktext.value != "") {
            item.innerHTML = tasktext.value + " - " + taskprio + " - " + h + ":" + m;
            lista.appendChild(item);
            qtdtask++;
        }
    } else {
        window.alert("Pra não ficar feio, só acumula 6 tarefas.")
    }

    tasktext.value = "";
    lowprioradio.checked = true;
    taskbox.style.display = "none";
}

function limparLista() {
    let lista = document.getElementsByClassName("list")[0];
    let child = lista.lastElementChild;
    while (child && lista.childElementCount > 1) {
        lista.removeChild(child);
        child = lista.lastElementChild;
    }
}