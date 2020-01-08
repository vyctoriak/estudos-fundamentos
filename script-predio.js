function mudarAndar(value, number, color) {
    const andar = window.document.getElementById('nomeAndar');
    andar.innerText = value;
    const numero = window.document.getElementById('numeroAndar');
    numero.innerText = number;
    numero.style.color = color;
}