function getSubmitData() {
    let form = document.getElementById('mediasubmit');
    form.classList.add('translate');
}

function submitAnswer() {
    let username = document.getElementById('username');
    let mediatitle = document.getElementById('mediatitle');
    let mediareason = document.getElementById('mediareason');
    window.alert("Data I should use for something \n\nuser: " + username.value + '\nmedia: ' + mediatitle.value + "\nreason: " + mediareason.value);
    username.value = "";
    mediatitle.value = "";
    mediareason.value = "";
    let form = document.getElementById('mediasubmit');
    form.classList.remove('translate');
}

function showHead() {
    let head = document.getElementById('headgradient');
    head.classList.add('translate');
}