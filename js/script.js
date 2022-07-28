import Accordion from "./modules/accordion.js";
import createNumbersAnimals from "./modules/create-numbers-animals.js";
import Modal from "./modules/modal.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import TabNav from "./modules/nav-tab.js";
import ToolTip from "./modules/tooltip.js";
import ShowScroll from "./modules/show-scroll.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import DateTool from "./modules/date-tool.js";


const scrollSuave = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

createNumbersAnimals('../../animals-api.json' ,'.numeros-grid');

const showScroll = new ShowScroll('[data-anime="scroll"]');
showScroll.init();

const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const dateTool = new DateTool('[data-semana]', 'open');
dateTool.init();
