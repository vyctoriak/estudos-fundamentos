// function primeiro() {
//    const andar = window.document.getElementById('numeroAndar');
//    console.log(andar);
//    andar.innerText = 'Primeiro andar';
// }

// function segundo() {
//     const andar = window.document.getElementById('numeroAndar');
//     andar.innerText = 'Segundo andar';
// }

// function terceiro() {
//     const andar = window.document.getElementById('numeroAndar');
//     andar.innerText = 'Terceiro andar';
// }

// function quarto() {
//     const andar = window.document.getElementById('numeroAndar');
//     andar.innerText = 'Quarto andar';
// }

function mudarAndar(value, number, color) {
    const andar = window.document.getElementById('nomeAndar');
    andar.innerText = value;
    const numero = window.document.getElementById('numeroAndar');
    numero.innerText = number;
    numero.style.color = color;
}