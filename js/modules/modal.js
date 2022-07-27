export default class Modal {
  constructor(...list) {
    this.botaoAbrir = document.querySelector(list[0]);
    this.botaoFechar = document.querySelector(list[1]);
    this.containerModal = document.querySelector(list[2]);

    // bind this ao callback para
    // fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }
  
  // Abre ou fecha o modal 
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal()
  }

  // Fecha o modal ao clicar fora
  clickForaModal(event) {
    if(event.target === this.containerModal)
    this.eventToggleModal(event);
  }

  // Adiciona os eventos aos elementos do modal 
  addEventModal() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickForaModal);
  }

  // Inicia a função
  init() {
    if(this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal();
    }
    return this;
  }
}

