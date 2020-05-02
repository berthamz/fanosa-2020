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
});
