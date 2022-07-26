export default function initAnimaNumeros(){
  function AnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numeros]');
  
    numeros.forEach((numero) => {
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
    })
  }
  
  const observerTarget = document.querySelector('.numeros');
  let observer;
  
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')){
      observer.disconnect();
      AnimaNumeros()
    }
  }

  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, {attributes: true});
}
