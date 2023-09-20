function tocaSomPom (seletorAudio) {
document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classiList[1];
    const idAudio = `#som_$(instrumento)'; //template string

    tecla.onlick = function () {
      tocaSom(idAudio);
    }

}
