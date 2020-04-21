//------------------------------------------
//hamberger
//-------------------------------------------

//ハンバーガーメニューの開閉
$('.hamburger').on('click', function () {
  $('.nav').fadeToggle(300);
  $('.nav-button').toggleClass('cross');
  $('body').toggleClass('noscroll');
});
