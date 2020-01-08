function mudarAndar(value, number, color, classe) {
    const andar = window.document.getElementById('nomeAndar');
    andar.innerText = value;

    const numero = window.document.getElementById('numeroAndar');
    numero.innerText = number;
    numero.style.color = color;

    var mudarClasse = document.getElementById("miniBox");
    mudarClasse.className = classe;

}

