// Função que abre e fecha as portas quando carrega a aplicação
// window.onload(abreFechaPortas());

// Função do onclick
function mudarAndar(value, number, color, classe) {
    var pessoas = document.getElementById('nomePessoa');
    if (pessoas.value) {
        // abrePortas();
        // fechaPortas();
        // trocaClasse(classe, "miniBox");
        // trocaNomeAndar(value);
        // trocaNumeroECor(number, color);
        // incluirPassageiro(number)
    } else {
        verificaPassageiro();
    }
}


//Animação pra abrir e fechar portas
function abrePortas() {
    setTimeout(function fecharPortas() {
        trocaClasse('open-left', 'closeDoor1');
        trocaClasse('open-rigth', 'closeDoor2');
        console.log('abrindo portas');
    }, 1000)
}

function fechaPortas() {
    setTimeout(function () {
        trocaClasse('door', 'closeDoor1');
        trocaClasse('door', 'closeDoor2');
        console.log('fechando portas');
    }, 2000)
}

// Função que muda a classe, faz o elevador subir e descer
function trocaClasse(classe, id) {
    setTimeout(function changeClass() {
        var mudarClasse = document.getElementById(id);
        mudarClasse.className = classe;
        console.log('subindo elevador')
    }, 3000)
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


// Função que verifica se tem o nome do passageiro no input ou não
function verificaPassageiro() {
    alert('O elevador não anda sem passageiro!');
}

// Função que inclui nome do passageiro no log
function incluirPassageiro(number) {
    passageiro = document.getElementById('nomePessoa');
    limpaLog = document.getElementById('pessoaElevador');
    if (passageiro.value) {

        var h = document.createElement("P");
        var t = document.createTextNode(`${passageiro.value} está no ${number} andar`);
        h.appendChild(t);
        document.getElementById('pessoaElevador').appendChild(h);
        passageiro = document.getElementById('nomePessoa').value = '';
    }
}

function fluxoLog(value, number, color, classe) {
    var pessoas = document.getElementById('nomePessoa');
    if(pessoas.value) {
        abrePortas();
        fechaPortas();
        console.log('abrir e fechar portas');
    } else {
        verificaPassageiro();
    }
    setTimeout(function(){
        trocaClasse(classe, "miniBox");
        console.log('está subindo e parou');
    }, 3000)
    trocaNomeAndar(value);
    trocaNumeroECor(number, color);
    incluirPassageiro(number);
    setTimeout(function(){
        abrePortas();
        fechaPortas();
        console.log('abrir e fechar portas de novo');
    },6000)


    // console.log('abrir e fechar portas');
    // setTimeout(function(){
    //     console.log('Está subindo e parou')
    // }, 4000)
    // setTimeout(function(){
    //     console.log('abrir e fechar porta de novo')
    // }, 6000)
}

// Validação se as portas estão abertas
function validarPortas() {
    if (abreFechaPortas == true) {
    }
}