(() => {
  const refs = {
    openModalBtn: document.querySelector('[header-menu-open]'),
    modal: document.querySelector('[header-menu]'),
    modal2: document.querySelector('[close-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.modal2.classList.toggle('is-open');
  }
})();