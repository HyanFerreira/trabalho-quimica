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
      container.innerHTML = `Em termos gerais, a reação de saponificação ocorre quando um éster em solução aquosa de base inorgânica origina um sal orgânico e álcool. A Reação de saponificação também é conhecida como hidrólise alcalina, através dela é que se torna possível o feitio do sabão. Falando quimicamente, seria a mistura de um éster (proveniente de um ácido graxo) e uma base (hidróxido de sódio) para se obter sabão (sal orgânico). <span class="form-span">Éster + base forte → sabão + glicerol</span>`
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
