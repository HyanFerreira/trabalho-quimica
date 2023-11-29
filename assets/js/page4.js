document.addEventListener('DOMContentLoaded', function () {
  function quizQuimica() {
    let optionA = document.getElementById('optionA');
    let optionError = document.querySelectorAll(
      '#optionB, #optionC, #optionD, #optionE',
    );
    let containerCorrect = document.querySelector('.container-correct');

    optionA.addEventListener('click', () => {
      optionA.style.color = '#17cf17';
      optionA.style.fontWeight = 'bold';
      containerCorrect.classList.toggle('active');
    });
    containerCorrect.addEventListener('click', () => {
      containerCorrect.classList.toggle('active');
    });
    optionError.forEach((option) => {
      option.addEventListener('click', () => {
        option.style.color = 'red';
        option.style.fontWeight = 'bold';
      });
    });
  }
  quizQuimica();
});
