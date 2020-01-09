function mudarAndar(value, number, color, classe) {

    trocaNomeAndar(value);
    trocaClasse(classe, "miniBox");
    trocaNumeroECor(number, color);

}

// Função que muda a classe
function trocaClasse(classe, id) {
    var mudarClasse = document.getElementById(id);
    mudarClasse.className = classe;
}

// Função que muda o número do andar e a cor 
function trocaNumeroECor(number, color) {
    const numero = window.document.getElementById('numeroAndar');
    numero.innerText = number;
    numero.style.color = color;
}

// Função que muda o nome do andar 
function trocaNomeAndar(value) {
    const andar = window.document.getElementById('nomeAndar');
    andar.innerText = value;
}