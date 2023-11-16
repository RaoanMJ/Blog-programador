function validar() {
    var checkbox = document.getElementById("volta");
    if (checkbox.checked) {
        window.location.href = "portifólio.html";
    } else {
        alert('Selecione a checkbox antes!')
    }
}