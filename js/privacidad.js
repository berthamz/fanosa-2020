$(document).ready(function () {
  // Privacidad sticky icon

  function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $(".privacidad-offset").offset().top;
    if (window_top > top) {
      $(".privacidad-pdf").addClass("stick");
      $(".privacidad-offset").height($(".privacidad-pdf").outerHeight());
    } else {
      $(".privacidad-pdf").removeClass("stick");
      $(".privacidad-offset").height(50);
    }
  }
  $(function () {
    $(window).scroll(sticktothetop);
    sticktothetop();
  });
});
