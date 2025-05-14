export default class Modal {
    constructor(modalId) {
      this.modal = document.getElementById(modalId);
      this.init();
    }
  
    init() {
      this.modal.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', () => this.close());
      });
  
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }
  
    open() {
      this.modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  
    close() {
      this.modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }