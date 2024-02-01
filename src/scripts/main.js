document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-calculadora').addEventListener('submit', function (evento) {
        evento.preventDefault();
        let numeroMinimo = document.getElementById('numero-minimo').value;
        numeroMinimo = parseInt(numeroMinimo);

        let numeroAleatorio = Math.random() * numeroMinimo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
}) 