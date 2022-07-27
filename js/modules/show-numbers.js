export default class ShowNumbers{
  constructor(numero, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numero);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    // bind this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom, com números em seu texto
  // incrementa a partir de 0 até o número final
  static incrementNumber(numero) {
    const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
  
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
  
        if(start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      },25);
  }

  // Ativa increment number para cada número selecionado do dom
  showNumber() {
    this.numeros.forEach((numero) => this.constructor.incrementNumber(numero));
  }
  
  // Função ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if(mutation[0].target.classList.contains(this.observerClass)){
      this.observer.disconnect();
      this.showNumber();
    }
  }

  // Adiciona o Mutationobsorver para verificar
  // quando a classe ativo é adiciona ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, {attributes: true});
  }

  init() {
    if(this.numeros.length && this.observerTarget){
      this.addMutationObserver();
    }
    return this;
  }
}
