import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";

import initTabNav from "./modules/nav-tab.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initDateObject from "./modules/date-object.js";
import initFetchAnimals from "./modules/fetch-animais.js";

import initAnimationScroll from "./modules/animacao-scroll.js";

const scrollSuave = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initAnimationScroll();
initTabNav();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initDateObject();
initFetchAnimals();
