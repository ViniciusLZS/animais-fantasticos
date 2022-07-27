export default class TabNav {
  constructor(...list) {
    this.tabMenu = document.querySelectorAll(list[0]);
    this.tabContent = document.querySelectorAll(list[1]);
    this.active = 'ativo';
  }
  
  // Ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((item)=>{
      item.classList.remove(this.active);
    });
    const direcaoAnimacaoTab = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.active, direcaoAnimacaoTab);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  // iniciar a função
  init() {
    if(this.tabMenu.length && this.tabContent.length){
      this.activeTab(0)
      this.addTabNavEvent();
    }
    return this;
  }
}
