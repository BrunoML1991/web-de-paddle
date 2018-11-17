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
    jQuery (function () {
        jQuery("#log-in-modal").click(function () {
            jQuery.getJSON("http://fenw.etsisi.upm.es:1723/users/login",
                "username="+jQuery("#username").val()+"&password="+jQuery("#password").val())
                .done(function (dato){
                    console.log("El token "+dato);
                    jQuery("#close-modal").click();
                })
                .fail(function (e) {
                    console.log(e);
                    jQuery("#username").attr("placeholder", "Usuario o contraseña inválidos");
                    jQuery("#username").addClass('red-placeholder');
                    jQuery("#username").val("")
                    jQuery("#password").attr("placeholder", "Usuario o contraseña inválidos");
                    jQuery("#password").addClass('red-placeholder');
                    jQuery("#password").val("")
                })
        });
    });
});