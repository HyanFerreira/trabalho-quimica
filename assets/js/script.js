document.addEventListener('DOMContentLoaded', function () {
  function displayTexts() {
    let saponificacao = document.getElementById('link-1');
    let aspirina = document.getElementById('link-2');
    let aspartame = document.getElementById('link-3');
    let biocombustivel = document.getElementById('link-4');
    let aromatizantes = document.getElementById('link-5');
    let essencias = document.getElementById('link-6');

    let options = document.querySelectorAll(
      '#link-1, #link-2, #link-3, #link-4, #link-5, #link-6',
    );

    options.forEach((option) => {
      option.addEventListener('click', () => {
        options.forEach((opt) => {
          opt.style.color = '#ffffff';
        });
        option.style.color = '#0D3E6B';
      });
    });

    let container = document.querySelector('.content-page-four span');

    saponificacao.addEventListener('click', () => {
      container.innerHTML = `Em termos gerais, a reação de saponificação ocorre quando um éster em solução aquosa de base inorgânica origina um sal orgânico e álcool. A Reação de saponificação também é conhecida como hidrólise alcalina, através dela é que se torna possível o feitio do sabão. Falando quimicamente, seria a mistura de um éster (proveniente de um ácido graxo) e uma base (hidróxido de sódio) para se obter sabão (sal orgânico). <span class="form-span">Éster + base forte → sabão + glicerol</span>`;
    });

    aspirina.addEventListener('click', () => {
      container.innerHTML = `Na indústria de polímeros os ésteres são usados como monômeros, podemos citar o tereftalato de metila que é usado para formação do polímero poli tereftalato de etileno usado na fabricação de garrafas plásticas (PET) e fibras para indústria têxtil. Polímeros são macromoléculas que apresentam um grande número de átomos em sua composição, o número de moléculas pode variar de 2 x 103 a 1 x 105 , eles são constituídos por unidades menores denominadas monômeros.
      <br><br>
      O acetato de vinila é o monômero utilizado na obtenção do poliacetato de vinila que é matéria prima para fabricação de películas para vidros à prova de choque em veículos e fixadores de tintas.
      `;
    });

    aspartame.addEventListener('click', () => {
      container.innerHTML = `O aspartame é um composto orgânico de função mista que foi descoberto em 1965 e possui a estrutura mostrada abaixo, sendo composto por dois aminoácidos (L-fenilalanina e L-aspártico) ligados por um éster de metila (metanol).<br><br>
      Ele é um dos adoçantes sintéticos mais utilizados no mundo inteiro. Ele é classificado como edulcorante, ou seja, é toda substância que confere sabor doce ao alimento e/ou ressalva ou realça o sabor/aroma de um alimento.
      <br><br>
      Um dos motivos principais é que ele é cerca de 180 vezes mais doce que o açúcar e não possui sabor desagradável. Ele é similar ao açúcar em termos calóricos, fornecendo ao organismo 4 cal/g, porém, conforme foi dito, ele é bem mais doce que a sacarose (açúcar) e, portanto, o consumidor usará bem menos aspartame do que açúcar para adoçar seu alimento, e a consequência é um consumo menor de quilocalorias.
      `;
    });

    biocombustivel.addEventListener('click', () => {
      container.innerHTML = `A principal utilização da reação de transesterificação é na obtenção do biodiesel. O biodiesel é um biocombustível que pode ser usado como combustível no lugar do diesel, mas com o benefício de poluir menos o meio ambiente, já que não possui compostos do elemento enxofre, que são em grande parte responsáveis pelo agravamento de problemas ambientais, tais como o aquecimento global, o efeito estufa e a chuva ácida. Além disso, o biodiesel é biodegradável, renovável e não corrosivo.
      <br><br>
      O biodiesel é uma mistura de ésteres metálicos ou etílicos de ácidos graxos. A reação de transesterificação que lhes dá origem consiste na reação dos triglicerídeos presentes nos óleos vegetais ou gorduras animais com álcool em presença de catalisador. Os óleos vegetais usados podem ser de mamona, de dendê, de palma de soja, milho, amendoim, algodão, babaçu etc. Óleos de frituras também podem ser reutilizados, esse reaproveitamento é benéfico para o meio ambiente porque impede que esses óleos sejam lançados nas águas de rios, lagos, lençóis freáticos ou contaminem o solo.
      `;
    });

    aromatizantes.addEventListener('click', () => {
      container.innerHTML = `Os ésteres são compostos químicos que geralmente possuem um odor agradável e são frequentemente utilizados como aromatizantes artificiais na indústria de alimentos e bebidas. Eles são produzidos sinteticamente para replicar aromas encontrados na natureza ou para criar novos perfis de sabor. 
      <br><br>
      A indústria de alimentos e bebidas identifica os aromas específicos desejados para seus produtos. Isso pode incluir aromas frutados, florais, cítricos, entre outros. Com base nos aromas desejados, os químicos formulam a combinação apropriada de ácidos e álcoois para criar o éster com o perfil de sabor desejado. A quantidade de cada componente na mistura afeta diretamente o aroma final do éster. 
      <br><br>
      Os ésteres são incorporados nos produtos finais, como refrigerantes, doces, sobremesas, confeitos, entre outros. A quantidade utilizada é cuidadosamente controlada para garantir que o sabor seja consistente e agradável.
      `;
    });

    essencias.addEventListener('click', () => {
      container.innerHTML = `Os ésteres também são comumente utilizados na produção de essências, que são substâncias aromáticas usadas em perfumaria, aromaterapia, produtos de higiene pessoal, produtos de limpeza e outros produtos que visam fornecer uma fragrância agradável. Assim como na indústria de alimentos, a escolha dos ésteres na produção de essências é crucial. 
      <br><br>
      Os químicos perfumistas selecionam ésteres com base nas características de aroma desejadas para a essência final. A formulação da essência envolve a combinação de diferentes ésteres, juntamente com outros compostos aromáticos, para criar uma fragrância única e agradável. Isso pode incluir óleos essenciais, aldeídos, cetonas e outros compostos aromáticos. 
      <br><br>
      As essências contendo ésteres são incorporadas em uma variedade de produtos, como perfumes, loções, sabonetes, produtos de limpeza e velas, para conferir-lhes fragrâncias distintas.`;
    });
  }
  displayTexts();
});
