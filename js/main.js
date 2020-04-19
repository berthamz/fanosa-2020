$(document).ready(function () {
  $(".burguer").click(function () {
    $(this).toggleClass("active");
    $(".header-menu-overlay").fadeToggle();
  });

  $(".menu-productos").mouseover(function () {
    $(this).addClass("active");
  });

  $(".menu-productos,.top-submenu").mouseout(function () {
    $(this).removeClass("active");
  });
});
