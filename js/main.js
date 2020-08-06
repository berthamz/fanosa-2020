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

///**FUNCIONES PARA EL ENVIO DE CORREOS */
function EnviaCorreo(tipo) {

	if (ValidaDatos(tipo)) {

		var urlajax = "";
		var mascara = "Procesando...";
		if (tipo == "1") {
			urlajax = '../index.aspx/EnviarCorreo';
			mascara = "Processing...";
		} else {
			urlajax = 'index.aspx/EnviarCorreo';
		}	

		var comentarios = "";
		if ($("#contact-form-comments").length) {
			comentarios = $("#contact-form-comments").val();
		}

		var obj = {
			parametro1: $('#nombre').val(),
			parametro2: $('#apellido').val(),
			parametro3: $('#contact-module-phone').val(),
			parametro4: $('#contact-module-email').val(),
			parametro5: "clientes@fanosa.com",
			parametro6: "192.168.1.12",
			parametro7: comentarios,
			parametro8: "general"
		};

		$.ajax({
			contentType: "application/json; charset=utf-8",
			type: 'POST',
			data: JSON.stringify(obj),
			url: urlajax,
			dataType: 'json',			
			success: OnSuccess,
			beforeSend: function () {
				$("#contacto-modulo").mask(mascara);
			},
			failure: function (response) {
				alert("Ocurrió un error al enviar el correo, intente mas tarde. Gracias");
			}
		});
		}
}

function ValidaDatos(tipo) {
	if ($('#nombre').val() == "") {
		if (tipo == "1") {
			alert("You must write your name.");
		} else {
			alert("Debes escribir tu nombre.");
		}		
		$('#nombre').focus();
		return false;
	}

	if ($('#apellido').val() == "") {
		if (tipo == "1") {
			alert("You must write your lastname.");
		} else {
			alert("Debes escribir tu apellido.");
		}
		$('#apellido').focus();
		return false;
	}

	if ($('#contact-module-phone').val() == "") {
		if (tipo == "1") {
			alert("You must write your phone.");
		} else {
			alert("Debes escribir tu teléfono.");
		}
		$('#contact-module-phone').focus();
		return false;
	}

	if (!$("#privacidad").is(':checked')) {
		if (tipo == "1") {
			alert("You must accept our privacy policies.");
		} else {
			alert("Debes aceptar nuestras políticas de privacidad.");
			}
		return false;
	}

	eemail = $('#contact-module-email').val();
	arroba = 0;
	charini = 0;
	charfin = 0;
	if (eemail == "") {
		if (tipo == "1") {
			alert("You must write your email.");
		} else {
			alert("Debes escribir tu correo electrónico.");
		}
		$('#contact-module-email').focus();
		return false;
	} else {
		for (i = 0; i < eemail.length; i++) {
			if (eemail.charAt(i) == "@") { arroba++; }
			if (arroba == 0) { charini++; }
			if ((arroba > 0) && (eemail.charAt(i) != ".")) { charfin++; }
		}
		if ((arroba == 0) || (arroba > 1)) {
			alert("El correo debe tener un @.")
			$('#contact-module-email').focus();
			return false;
		}
		if ((charini < 2) || (charfin < 4)) {
			alert("El correo no tiene un formato correcto.");
			$('#contact-module-email').focus();
			return false;
		}
	}

	return true;
}

function OnSuccess(response) {	
	$("#contacto-modulo").unmask();
	alert(response.d);
	$('#nombre').val('');
	$('#contact-module-phone').val('');
	$('#contact-module-email').val('');
	$('#apellido').val('');

	if ($("#contact-form-comments").length) {
		$('#contact-form-comments').val('');
	}	
}

function OnSuccessTransparencia(response) {
	$("#forma-transparencia").unmask();
	alert(response.d);
	$('#nombre').val('');
	$('#comentarios').val('');
	$('#plaza').val('');
	$('#correo').val('');
}

function ValidaDatosTransparencia(tipo) {

	if ($('#comentarios').val() == "") {
		if (tipo == "1") {
			alert("You must write your comments.");
		} else {
			alert("Debes escribir tus comentarios.");
		}
		
		$('#comentarios').focus();
		return false;
	}

	if (!$("#privacidad").is(':checked')) {
		if (tipo == "1") {
			alert("You must accept our privacy policies.");
		} else {
			alert("Debes aceptar nuestras políticas de privacidad.");
		}
		return false;
	}

	return true;
}

function EnviaCorreoTransparencia(tipo) {

	if (ValidaDatosTransparencia(tipo)) {

		var urlajax = "";
		var mascara = "Procesando...";
		if (tipo == "1") {
			urlajax = '../index.aspx/EnviarCorreo';
			mascara = "Processing...";
		} else {
			urlajax = 'index.aspx/EnviarCorreo';
		}		

		var obj = {
			parametro1: $('#nombre').val(),
			parametro2: $('#correo').val(),
			parametro3: $('#plaza').val(),
			parametro4: "",
			parametro5: "transparencia@fanosa.com",
			parametro6: "192.168.1.12",
			parametro7: $('#comentarios').val(),
			parametro8: "transparencia"
		};

		$.ajax({
			contentType: "application/json; charset=utf-8",
			type: 'POST',
			data: JSON.stringify(obj),
			url: urlajax,
			dataType: 'json', 
			beforeSend: function () {
				$("#forma-transparencia").mask(mascara);
			},
			success: OnSuccessTransparencia,
			failure: function (response) {
				alert("Ocurrió un error al enviar el correo, intente mas tarde. Gracias");
			}
		});
	}
}

function EnviaCorreoTrabajo(tipo) {

	if (ValidaDatosTrabajo(tipo)) {

		var urlajax = "";
		var mascara = "Procesando...";
		if (tipo == "1") {
			urlajax = '../FileUploadHandler.ashx';
			mascara = "Processing...";
		} else {
			urlajax = 'FileUploadHandler.ashx';
		}	

		var formData = new FormData();	
		formData.append("parametro1", $('#nombre').val());
		formData.append("parametro2", $('#correo').val());
		formData.append("parametro3", $('#telefono').val());
		formData.append("parametro4", $('#ciudad').val());				
		formData.append("parametro5", "empleosweb@fanosa.com");
		formData.append("parametro6", "192.168.1.12");
		formData.append("parametro7", $("#interes option:selected").text());
		formData.append("parametro8", $('#experiencia').val());
		formData.append("cvFile", $("#cv")[0].files[0]);
				
		$.ajax({
			contentType: false,
			processData: false,
			type: 'POST',			
			data: formData,
			url: urlajax,			
			success: OnSuccessTrabajo,
			beforeSend: function () {
				$("#forma-trabajo").mask(mascara);
			},
			failure: function (response) {
				alert("Ocurrió un error al enviar el correo, intente mas tarde. Gracias");
			}
		});
	}
}

function OnSuccessTrabajo(response) {
	$("#forma-trabajo").unmask();
	alert(response);
	$('#nombre').val('');
	$('#correo').val('');
	$('#telefono').val('');
	$('#ciudad').val('');
	$('#interes').val('0');
	$('#experiencia').val('');
	$('#cv').val('');
}

function ValidaDatosTrabajo(tipo) {

	if ($('#nombre').val() == "") {
		if (tipo == "1") {
			alert("You must write your name.");
		} else {
			alert("Debes escribir tu nombre.");
		}	
		$('#nombre').focus();
		return false;
	}

	if ($('#telefono').val() == "") {
		if (tipo == "1") {
			alert("You must write your phone.");
		} else {
			alert("Debes escribir tu teléfono.");
		}
		$('#telefono').focus();
		return false;
	}

	if ($('#ciudad').val() == "") {
		if (tipo == "1") {
			alert("You must write your city.");
		} else {
			alert("Debes escribir la ciudad.");
		}		
		$('#ciudad').focus();
		return false;
	}
	
	if ($('#interes').val() == "0") {
		if (tipo == "1") {
			alert("You must select your area of interest.");
		} else {
			alert("Debes seleccionar tu área de interés.");
		}
		return false;
	}
	
	if ($('#experiencia').val() == "") {
		if (tipo == "1") {
			alert("You must write your experience summary.");
		} else {
			alert("Debes escribir un resumen de tu experiencia.");
		}
		$('#experiencia').focus();
		return false;
	}

	if (!$("#privacidad").is(':checked')) {
		if (tipo == "1") {
			alert("You must accept our privacy policies.");
		} else {
			alert("Debes aceptar nuestras políticas de privacidad.");
		}
		return false;
	}

	eemail = $('#correo').val();
	arroba = 0;
	charini = 0;
	charfin = 0;
	if (eemail == "") {
		if (tipo == "1") {
			alert("You must write your email.");
		} else {
			alert("Debes escribir tu teléfono.");
		}
		$('#correo').focus();
		return false;
	} else {
		for (i = 0; i < eemail.length; i++) {
			if (eemail.charAt(i) == "@") { arroba++; }
			if (arroba == 0) { charini++; }
			if ((arroba > 0) && (eemail.charAt(i) != ".")) { charfin++; }
		}
		if ((arroba == 0) || (arroba > 1)) {
			alert("El correo debe tener un @.")
			$('#correo').focus();
			return false;
		}
		if ((charini < 2) || (charfin < 4)) {
			alert("El correo no tiene un formato correcto.");
			$('#correo').focus();
			return false;
		}
	}

	return true;
}

function EnviaCorreoBoletin(tipo) {

	if (ValidaCorreo(tipo)) {

		var urlajax = "";
		var mascara = "Procesando...";
		if (tipo == "1") {
			urlajax = '../index.aspx/EnviarCorreoBoletin';
			mascara = "Processing...";
		} else {
			urlajax = 'index.aspx/EnviarCorreoBoletin';
		}	

		var obj = {
			parametro1: $('#descargas-module-email').val(),
			parametro2: $('#descargas-module-name').val()			
		};

		$.ajax({
			contentType: "application/json; charset=utf-8",
			type: 'POST',
			data: JSON.stringify(obj),
			url: urlajax,
			dataType: 'json',
			success: OnSuccessBoletin, 
			beforeSend: function () {
				$("#forma-suscribete").mask(mascara);
			},
			failure: function (response) {
				alert("Error.");
			}
		});
	}
}

function OnSuccessBoletin(response) {
	$("#forma-suscribete").unmask();
	alert(response.d);
	$('#descargas-module-name').val('');
	$('#descargas-module-email').val('');
}

function ValidaCorreo(tipo) {

	if ($('#descargas-module-name').val() == "") {
		if (tipo == "1") {
			alert("You must write your name.");
		} else {
			alert("Debes escribir tu nombre.")
		}		
		$('#descargas-module-name').focus();
		return false;
	}

	if (!$("#descargas-privacidad").is(':checked')) {
		if (tipo == "1") {
			alert("You must accept our privacy policies.");
		} else {
			alert("Debes aceptar nuestras políticas de privacidad.");
		}
		return false;
	}

	eemail = $('#descargas-module-email').val();
	arroba = 0;
	charini = 0;
	charfin = 0;
	if (eemail == "") {
		if (tipo == "1") {
			alert("You must write your email.");
		} else {
			alert("Debes escribir tu teléfono.");
		}
		$('#descargas-module-email').focus();
		return false;
	} else {
		for (i = 0; i < eemail.length; i++) {
			if (eemail.charAt(i) == "@") { arroba++; }
			if (arroba == 0) { charini++; }
			if ((arroba > 0) && (eemail.charAt(i) != ".")) { charfin++; }
		}
		if ((arroba == 0) || (arroba > 1)) {
			alert("El correo debe tener un @.")
			$('#descargas-module-email').focus();
			return false;
		}
		if ((charini < 2) || (charfin < 4)) {
			alert("El correo no tiene un formato correcto.");
			$('#descargas-module-email').focus();
			return false;
		}
	}
	return true;
}