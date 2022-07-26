import SmoothScroll from "./modules/smooth-scroll.js";
import initAnimationScroll from "./modules/animacao-scroll.js"
import initAccordion from "./modules/accordion.js"
import initTabNav from "./modules/nav-tab.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initDateObject from "./modules/date-object.js";
import initFetchAnimals from "./modules/fetch-animais.js";


const scrollSuave = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();


initAnimationScroll();
initAccordion();
initTabNav();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initDateObject();
initFetchAnimals();
