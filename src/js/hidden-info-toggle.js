export default function ShowHiddenBlock(element) {
  const toggleInfo = element;

  for (let i = 0; i < toggleInfo.length; i++) {
    toggleInfo[i].addEventListener('click', OnQuestionClick);
  }

  function OnQuestionClick() {
    // this.classList.toggle('active');

    const panel = this.nextElementSibling;

    if (panel.classList.contains('toggle')) {
      panel.classList.remove('toggle');
    } else {
      panel.classList.add('toggle');
    }
  }
}
