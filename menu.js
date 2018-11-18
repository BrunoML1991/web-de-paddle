jQuery(function () {
    jQuery("#right_nav").position({
        my: "right center",
        at: "right-30 center",
        of: "#nav"
    });
    jQuery(function () {
        jQuery("#inicio").click(function () {
            jQuery.get("main_page/main_page.html", function (html) {
                jQuery("#main_page").html(html);
            });
        });
    });
    jQuery(function () {
        jQuery("#logo").click(function () {
            jQuery.get("main_page/main_page.html", function (html) {
                jQuery("#main_page").html(html);
            });
        });
    });
    jQuery(function () {
        jQuery("#instalaciones").click(function () {
            jQuery.get("instalaciones/instalaciones.html", function (html) {
                jQuery("#main_page").html(html);
            });
        });
    });
    jQuery(function () {
        jQuery("#registro").click(function () {
            jQuery.get("registro/registro.html", function (html) {
                jQuery("#main_page").html(html);
            });
        });
    });
    jQuery("#main_page").position({
        my: "center top+20",
        at: "center bottom",
        of: "#nav"
    });
    jQuery.get("main_page/main_page.html", function (html) {
        jQuery("#main_page").html(html);
    });
    jQuery("#log-in-modal").click(function () {
        if (jQuery("#username").val() == "") {
            jQuery("#username").attr("placeholder", "Usuario requerido").addClass('red-placeholder');
        }
        if (jQuery("#password").val() == "") {
            jQuery("#password").attr("placeholder", "Contraseña requerida").addClass('red-placeholder');
        } if (jQuery("#username").val() != "" || jQuery("#password").val() != "") {
            console.log(jQuery("#username").val()+" "+jQuery("#password").val());
            jQuery.getJSON("http://fenw.etsisi.upm.es:1723/users/login",
                "username=" + jQuery("#username").val() + "&password=" + jQuery("#password").val())
                .done(function (dato, textStatus, jqXHR) {
                    sessionStorage.setItem("token", jqXHR.getResponseHeader("Authorization").toString());
                    jQuery("#log-in").html("Log-Out").attr("data-target", "#modal-out");
                    jQuery("#close-modal").click();
                })
                .fail(function (e) {
                    console.log(e);
                    jQuery("#username").attr("placeholder", "Usuario o contraseña inválidos")
                        .addClass('red-placeholder')
                        .val("");
                    jQuery("#password").attr("placeholder", "Usuario o contraseña inválidos")
                        .addClass('red-placeholder')
                        .val("");
                })
        }
    });
    jQuery("#log-out-modal").click(function () {
        sessionStorage.removeItem("token");
        jQuery("#log-in").html("Log-In");
        jQuery("#log-in").attr("data-target", "#modal-in");
        jQuery("#close-modal-out").click();
    });
    jQuery("#reservas").click(function () {
        if (sessionStorage.getItem("token") == null) {
            jQuery("#main_page").html("<p style='background-color: aliceblue'>Ha de estar loggeado para accecer a este contenido</p>");
        } else {
            jQuery("#main_page").html("<p style='background-color: aliceblue'>Página en construcción</p>");
        }
    });
    jQuery("#modal-logo").draggable();
    jQuery("#droppable").droppable({
        drop: function (event, ui) {
            jQuery(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("¡Botón activado!");
            jQuery("#log-in-modal").prop('disabled', false);
        }
    });
});