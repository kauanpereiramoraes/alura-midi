//Pom ---------------------------------------
function tocaSomPom (idElementoAudio) {
document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onlick = tocaSomPom;
