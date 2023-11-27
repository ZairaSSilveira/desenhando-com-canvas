// Obtém o elemento canvas do HTML
let canvas = document.getElementById("canvas");

// Obtém o contexto de desenho 2D
let contexto = canvas.getContext("2d");

// Variável para verificar se estamos desenhando
let desenhando = false;

// Adiciona um ouvinte de evento para o evento mousedown
canvas.addEventListener("mousedown", function(event) {
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

// Adiciona um ouvinte de evento para o evento mousemove
canvas.addEventListener("mousemove", function(event) {
    if (desenhando) {
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
});

// Adiciona um ouvinte de evento para o evento mouseup
canvas.addEventListener("mouseup", function() {
    desenhando = false;
});

// Obtém o elemento de entrada da cor do HTML
let corInput = document.getElementById("cor");

// Define a cor inicial do contexto de desenho
contexto.strokeStyle = corInput.value;

// Adiciona um ouvinte de evento para o evento change da cor
corInput.addEventListener("change", function() {
    contexto.strokeStyle = corInput.value;
});

// Obtém o elemento de entrada de espessura do HTML
let espessuraInput = document.getElementById("espessura");

// Define a espessura inicial do pincel
contexto.lineWidth = espessuraInput.value;

// Adiciona um ouvinte de evento para o evento input da espessura
espessuraInput.addEventListener("input", function() {
    contexto.lineWidth = espessuraInput.value;
});
