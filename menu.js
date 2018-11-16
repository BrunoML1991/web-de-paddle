jQuery(function () {
    jQuery("#right_nav").position({
        my: "right center",
        at: "right-30 center",
        of: "#nav"
    });
    jQuery(function () {
        jQuery("#log_in").click(function () {
            jQuery("#main_page").load('Previo/login.html')
        });
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
    jQuery("#main_page").position({
        my: "center top+20",
        at: "center bottom",
        of: "#nav"
    });
    jQuery.get("main_page/main_page.html", function (html) {
        jQuery("#main_page").html(html);
    });
});