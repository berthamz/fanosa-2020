$(document).ready(function () {

    //Llena combo de ciudades
    for (i = 0; i < datos.length; i++) {
        var option = $(document.createElement('option'));

        option.text(datos[i][1]);
        option.val(datos[i][0]);

        $("#cboCiudad").append(option);
    }

    //ordena el combo de las ciudades
    ordenarSelect('cboCiudad');

    $("#cboCiudad").change(function () {
        var id_ciudad = $(this).val() - 1;

        $("#sEstado").val(datos[id_ciudad][2]);
        $("#sLatitud").val(datos[id_ciudad][3]);
        $("#sTemp").val(datos[id_ciudad][4]);
        $("#sTdiaria").val(datos[id_ciudad][5]);
        $("#sFactor").val(datos[id_ciudad][6]);
    });

    $("#txtLargo").keydown(function (event) {
        if (event.shiftKey) {
            event.preventDefault();
        }

        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 110 || event.keyCode == 190) {
        }
        else {
            if (event.keyCode < 95) {
                if (event.keyCode < 48 || event.keyCode > 57) {
                    event.preventDefault();
                }
            }
            else {
                if (event.keyCode < 96 || event.keyCode > 105) {
                    event.preventDefault();
                }
            }
        }
    });

    $("#txtAncho").keydown(function (event) {
        if (event.shiftKey) {
            event.preventDefault();
        }

        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 110 || event.keyCode == 190) {
        }
        else {
            if (event.keyCode < 95) {
                if (event.keyCode < 48 || event.keyCode > 57) {
                    event.preventDefault();
                }
            }
            else {
                if (event.keyCode < 96 || event.keyCode > 105) {
                    event.preventDefault();
                }
            }
        }
    });

    $("#btnCalcular").click(function () {
        var msj = ValidaForm();

        if (msj == "") {
            var oVariables = new Object();
            if ($("#sOrientacion").val() == "0") {
                oVariables.sVentanasNorte = $("#sVentanasOeste").val();
                oVariables.sVentanasSur = $("#sVentanasEste").val();
                oVariables.sVentanasEste = $("#sVentanasNorte").val();
                oVariables.sVentanasOeste = $("#sVentanasSur").val();
                oVariables.sPuertasNorte = $("#sPuertasOeste").val();
                oVariables.sPuertasSur = $("#sPuertasEste").val();
                oVariables.sPuertasEste = $("#sPuertasNorte").val();
                oVariables.sPuertasOeste = $("#sPuertasSur").val();
            } else if ($("#sOrientacion").val() == "1") {
                oVariables.sVentanasNorte = $("#sVentanasEste").val();
                oVariables.sVentanasSur = $("#sVentanasOeste").val();
                oVariables.sVentanasEste = $("#sVentanasSur").val();
                oVariables.sVentanasOeste = $("#sVentanasNorte").val();
                oVariables.sPuertasNorte = $("#sPuertasEste").val();
                oVariables.sPuertasSur = $("#sPuertasOeste").val();
                oVariables.sPuertasEste = $("#sPuertasSur").val();
                oVariables.sPuertasOeste = $("#sPuertasNorte").val();
            } else if ($("#sOrientacion").val() == "2") {
                oVariables.sVentanasNorte = $("#sVentanasSur").val();
                oVariables.sVentanasSur = $("#sVentanasNorte").val();
                oVariables.sVentanasEste = $("#sVentanasOeste").val();
                oVariables.sVentanasOeste = $("#sVentanasEste").val();
                oVariables.sPuertasNorte = $("#sPuertasSur").val();
                oVariables.sPuertasSur = $("#sPuertasNorte").val();
                oVariables.sPuertasEste = $("#sPuertasOeste").val();
                oVariables.sPuertasOeste = $("#sPuertasEste").val();
            } else {
                oVariables.sVentanasNorte = $("#sVentanasNorte").val();
                oVariables.sVentanasSur = $("#sVentanasSur").val();
                oVariables.sVentanasEste = $("#sVentanasEste").val();
                oVariables.sVentanasOeste = $("#sVentanasOeste").val();
                oVariables.sPuertasNorte = $("#sPuertasNorte").val();
                oVariables.sPuertasSur = $("#sPuertasSur").val();
                oVariables.sPuertasEste = $("#sPuertasEste").val();
                oVariables.sPuertasOeste = $("#sPuertasOeste").val();
            }
            
            oVariables.sGrados = $("#sTemp").val();
            oVariables.sTdiaria = $("#sTdiaria").val();
            oVariables.sMaterialTecho = $("#sTechoMaterial").val();
            oVariables.sOrientacion = $("#sOrientacion").val();
            oVariables.sFactor = $("#sFactor").val();
            oVariables.sAncho = $("#txtAncho").val();
            oVariables.sLargo = $("#txtLargo").val();
            oVariables.sNivel = $("#sNiveles").val();
            oVariables.sMaterialMuro = $("#sMurosMaterial").val();
            oVariables.sLatitud = $("#sLatitud").val();

            $.ajax({
                type: "POST",
                url: "index.aspx/CalculaCarga",
                data: JSON.stringify(oVariables),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function () {
                    $("#calculos").mask("Procesando..");
                },
                success: OnSuccess,
                failure: function (response) {
                    alert(response.d);
                }

            });
        } else
            alert(msj);

    });

    $("#btnReiniciar2").click(function () {
        $("#resultados").hide();
        $("#calculos").show();
        $("#txtAncho").val("");
        $("#txtLargo").val("");
        $("#cboCiudad").val("0");
        $("#sOrientacion").val("0");
        $("#sNiveles").val("1");
        $("#sMurosMaterial").val("0");
        $("#sTechoMaterial").val("0");
        $("#sPuertasNorte").val("0");
        $("#sVentanasNorte").val("0");
        $("#sPuertasSur").val("0");
        $("#sVentanasSur").val("0");
        $("#sPuertasEste").val("0");
        $("#sVentanasEste").val("0");
        $("#sPuertasOeste").val("0");
        $("#sVentanasOeste").val("0");

    });


    $("#btnReiniciar").click(function () {
        $("#txtAncho").val("");
        $("#txtLargo").val("");
        $("#cboCiudad").val("0");
        $("#sOrientacion").val("0");
        $("#sNiveles").val("1");
        $("#sMurosMaterial").val("0");
        $("#sTechoMaterial").val("0");
        $("#sPuertasNorte").val("0");
        $("#sVentanasNorte").val("0");
        $("#sPuertasSur").val("0");
        $("#sVentanasSur").val("0");
        $("#sPuertasEste").val("0");
        $("#sVentanasEste").val("0");
        $("#sPuertasOeste").val("0");
        $("#sVentanasOeste").val("0");

        $("html, body").animate({ scrollTop: 0 }, 600);

    });

});

function OnSuccess(response) {
    $("#calculos").unmask();
    var uno = response.d;
    var obj = jQuery.parseJSON(uno);

    $("#dMuroTecho").html(obj.sMuroTechoPorcentaje);
    $("#dTecho").html(obj.sTechoPorcentaje);
    $("#dMuro").html(obj.sMuroPorcentaje);

    $("#dMuroTechoAhorro").html(obj.sMuroTechoPorcen2);
    $("#dTechoAhorro").html(obj.sTechoPorcen2);
    $("#dMuroAhorro").html(obj.sMuroPorcen2);

    $("#ciudad_span").html($("#cboCiudad option:selected").text().toUpperCase());
    $("#area_span").html($("#txtAncho").val() * $("#txtLargo").val());

    $("#pct-ahorro").html(obj.sMuroTechoPorcen2);
    $("#pct-gasto").html(obj.sDiferenciaPorcen);

    $("#calculos").hide();
    $("#resultados").show();

    $("html, body").animate({ scrollTop: 0 }, 600);
}

function ordenarSelect(id_componente) {
    var selectToSort = jQuery('#' + id_componente);
    var optionActual = selectToSort.val();
    selectToSort.html(selectToSort.children('option').sort(function (a, b) {
        return a.text === b.text ? 0 : a.text < b.text ? -1 : 1;
    })).val(optionActual);
}

function ValidaForm() {
    var msj = "";

    if ($("#cboCiudad").val() == "0")
        msj += "Es necesario seleccionar una ciudad. \n";

    if ($("#txtAncho").val() == "")
        msj += "Es necesario escribir el ancho del frente (fachada, A) de su Vivienda en metros. \n";

    if ($("#txtLargo").val() == "")
        msj += "Es necesario escribir la medida de la profundidad (L) de su Vivienda en metros. \n";

    return msj;
}