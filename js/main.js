$(document).ready(function () {
  // Burguer icon

  $(".burguer").click(function () {
    $(this).toggleClass("active");
    $(".header-menu-overlay").fadeToggle();
  });

  // Dropdown menu for Productos

  $(".menu-productos").mouseover(function () {
    $(this).addClass("active");
  });

  $(".menu-productos,.top-submenu").mouseout(function () {
    $(this).removeClass("active");
  });

  // Header sticky for desktop

  $(function () {
    var header = $(".header");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
  });

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
      $(".overlay-base").fadeOut(200);
      $(".overlay-" + overlayName).fadeIn(200);
    } else {
      $(".overlay-" + overlayName).fadeIn(200);
    }
  });

  // Botón Close para Descargas, Galerías y Videos

  $(".js-close").click(function () {
    $("body").removeClass("noscroll");
    $(".overlay-base").fadeOut(100);
  });
});
