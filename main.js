function tocaSomPom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio)
}

if (elemento && elemento.localNane === 'audio') {
      elemento.play();
}
else {
   //alert('elemento não encontrado');
   console.log('Elemento não encontrado ou seletor inválido');
 }

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

 tecla.onkeydawn = function (evento) {

    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classlist.add('ativa');
   }

 }
tecla.onkeyup = funcion () {
  tecla.classList.remove('ativa');
  }
  
}
