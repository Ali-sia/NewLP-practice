//іккордеон з питаннями
import ShowHiddenBlock from './js/hidden-info-toggle';

ShowHiddenBlock(document.getElementsByClassName('faq_question-holder'));
ShowHiddenBlock(document.getElementsByClassName('details_title-holder'));
ShowHiddenBlock(
  document.getElementsByClassName('header-slide-menu_title-holder')
);

// налаштування слайдера
import './js/slider';

//відкриття-закриття мобільного меню
import './js/slide-menu-active';
