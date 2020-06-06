class ServiceDropdown{
  constructor(container){
    this.container = container;
    this.trigger = container.querySelector('.service-trigger');
    this.content = container.querySelector('.scroll-content');
  }
  init(){
    this.trigger.addEventListener('click', () => {
      this.content.classList.toggle('active');
    });
  }
}