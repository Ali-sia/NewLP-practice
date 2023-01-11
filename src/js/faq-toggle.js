const showHideAnswer = document.getElementsByClassName('faq_question-holder');

for (let i = 0; i < showHideAnswer.length; i++) {
  showHideAnswer[i].addEventListener('click', OnQuestionClick);
}

function OnQuestionClick() {
  this.classList.toggle('active');

  const panel = this.nextElementSibling;

  if (panel.classList.contains('toggle')) {
    panel.classList.remove('toggle');
  } else {
    panel.classList.add('toggle');
  }
}
