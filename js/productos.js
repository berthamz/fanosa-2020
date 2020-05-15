$(document).ready(function () {
  // Overlay Descargas
  $(".js-descargas-open").click(function () {
    $("body").addClass("noscroll");
    $(".overlay-descargas").fadeIn(100);
  });

  // Overlay Galerías y Videos
  $(".base-grid > div, .overlay-categorias-btns > div").click(function () {
    var overlayName = this.className;
    $("body").addClass("noscroll");

    if ($(this).parents(".overlay-wrapper").length) {
      $(".overlay-base").fadeOut(300);
      $(".overlay-" + overlayName).fadeIn(600);
    } else {
      $(".overlay-" + overlayName).fadeIn(100);
    }
  });

  // Botón Close para Descargas, Galerías y Videos
  $(".js-close").click(function () {
    $("body").removeClass("noscroll");
    $(".overlay-base").fadeOut(100);
  });
});
