$(document).ready(function () {
  $("header").load("header.html", function () {
    // Burguer icon

    $(".burguer").click(function () {
      console.log("burger");
      $(this).toggleClass("active");
      $(".header-menu-overlay").fadeToggle();
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

    // Dropdown menu for Productos

    $(".menu-productos").mouseover(function () {
      $(this).addClass("active");
    });

    $(".menu-productos,.top-submenu").mouseout(function () {
      $(this).removeClass("active");
    });
  });

  $("footer").load("footer.html");

  $(".contact-box").load("contacto-modulo.html");

  $(".descargas-suscribete").load("descargas-suscribete.html");

  // Overlay Descargas

  $(".js-descargas-open").click(function () {
    $("body").addClass("noscroll");
    $(".overlay-descargas").fadeIn(100);
  });

  // Overlay Galerías y Videos

  $(
    ".base-grid > div, .overlay-categorias-btns > div, .overlay-categorias-btns > a"
  ).click(function () {
    var overlayName = this.className;

    if ($(this).parents(".overlay-wrapper").length) {
      $(".overlay-base").fadeOut(200);
    }

    $("body").addClass("noscroll");
    $(".overlay-" + overlayName).fadeIn(200);
  });

  // Botón Close para Descargas, Galerías y Videos

  $(".js-close").click(function () {
    $("body").removeClass("noscroll");
    $(".overlay-base").fadeOut(100);

    $(".youtube-video").each(function () {
      var el_src = $(this).attr("src");
      $(this).attr("src", el_src);
    });
  });

  // Select Contacto
  $("#cobertura-menu").change(function () {
    var selectedCity = $(this).children("option:selected").val();

    $(".cobertura-ciudad").fadeOut(0);
    $(".opcion-" + selectedCity).fadeIn(200);
  });
});
