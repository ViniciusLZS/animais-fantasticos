import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/nav-tab.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";

import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initDateObject from "./modules/date-object.js";
import initFetchAnimals from "./modules/fetch-animais.js";

import initAnimationScroll from "./modules/animacao-scroll.js";

const scrollSuave = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

initDropDownMenu();
initMenuMobile();
initDateObject();
initFetchAnimals();
initAnimationScroll();
