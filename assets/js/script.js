//------------------------------------------
//hamberger
//-------------------------------------------

(function () {
  const body = document.querySelector('body');
  const btn = document.querySelector('.hamburger');

  function toggleClass() {
    body.classList.toggle('active');
    body.classList.toggle('noscroll');
  }

  btn.addEventListener('click', toggleClass);
})();
