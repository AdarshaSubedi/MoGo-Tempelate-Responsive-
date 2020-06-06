class ServiceDropdown{
  constructor(list){
    this.list = list;
    this.trigger = list.querySelector('.service-trigger');
    this.content = list.querySelector('.scroll-content');
    this.arrow = list.querySelector('.arrow');
  }
  init(){
    this.trigger.addEventListener('click', () => {
      this.content.classList.toggle('active');
      this.arrow.classList.toggle('down');
      this.arrow.classList.toggle('up');
    });
  }
}