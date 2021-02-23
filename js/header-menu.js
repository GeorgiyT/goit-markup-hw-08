// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[header-menu-open]'),
//     modal: document.querySelector('[header-menu]'),
//     modal2: document.querySelector('[close-menu]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//       refs.modal.classList.toggle('is-hidden');
//       refs.modal2.classList.toggle('is-open');
//   }
// })();


(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobile-menu-open]'),
    closeModalBtn: document.querySelector('[mobile-menu-close]'),
    modal: document.querySelector('[mobile-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();