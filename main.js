var puntos = 0;
var tiempo = 30;
var puntosGana = 30;
var intervalo;
var inicio = document.getElementById('inicio');
var mostrarPuntos = document.getElementById('puntos');
var mostrarTiempo = document.getElementById('tiempo');
var ficha = document.getElementById('ficha');
var condicion = document.getElementById('condicion');

document.getElementById('iniciarJuego').addEventListener("click",iniciarJuego);
function iniciarJuego(){
    inicio.style.display = 'none';
    mostrarPuntos.innerHTML = `Puntos: ${puntos} / ${puntosGana}`;
    mostrarTiempo.innerHTML = "&nbsp;&nbsp; Tiempo: " + tiempo;
    function restarTiempo(){
        tiempo--;
        mostrarTiempo.innerHTML = "&nbsp;&nbsp; Tiempo: " + tiempo;
        perder();
    }
    intervalo = setInterval(restarTiempo, 1000);
}

ficha.addEventListener("click", sumarPuntos);
function sumarPuntos(){
    puntos++;
    mostrarPuntos.innerHTML = `Puntos: ${puntos} / ${puntosGana}`;
    moverFicha();
    ganar();
}

function moverFicha(){
    let num1 = Math.round(Math.random()*90); 
    let num2 = Math.round(Math.random()*90);
    ficha.style.marginTop = num1 +"%";
    ficha.style.marginLeft = num2 +"%";
}

function reiniciarJuego(){
    puntos = 0;
    tiempo = 30;
    clearInterval(intervalo);
    inicio.style.display = 'block';
}

function perder(){
    if (tiempo == 0) {
        condicion.innerHTML = "PERDISTE !!";
        reiniciarJuego();
    }
}

function ganar(){
    if(puntos == puntosGana){
        condicion.innerHTML = "GANASTE !!";
        reiniciarJuego();
    } 
}