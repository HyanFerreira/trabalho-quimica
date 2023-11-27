document.addEventListener('DOMContentLoaded', function () {
  function displayTexts() {
    let saponificacao = document.getElementById('link-1');
    let aspirina = document.getElementById('link-2');
    let aspartame = document.getElementById('link-3');
    let biocombustivel = document.getElementById('link-4');
    let aromatizantes = document.getElementById('link-5');
    let essencias = document.getElementById('link-6');

    let container = document.querySelector('.content-page-four span');

    saponificacao.addEventListener('click', () => {
      container.innerHTML = 'Texto para saponificacao';
    });

    aspirina.addEventListener('click', () => {
      container.innerHTML = 'Texto para aspirina';
    });

    aspartame.addEventListener('click', () => {
      container.innerHTML = 'Texto para aspartame';
    });

    biocombustivel.addEventListener('click', () => {
      container.innerHTML = 'Texto para biocombustivel';
    });

    aromatizantes.addEventListener('click', () => {
      container.innerHTML = 'Texto para aromatizantes';
    });

    essencias.addEventListener('click', () => {
      container.innerHTML = 'Texto para essencias';
    });
  }

  displayTexts();
});
