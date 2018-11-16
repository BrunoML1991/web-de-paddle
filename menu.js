jQuery(function () {
    jQuery("#right_nav").position({
        my: "right-10",
        at: "right",
        of: "#nav"
    });
    jQuery(function () {
        jQuery("#log_in").click(function () {
            jQuery("#main_page").load('Previo/login.html')
        });
    });
    jQuery(function () {
        jQuery("#inicio").click(function () {
            jQuery.get("main_page.html",function (html) {
                jQuery("#main_page").html(html);
            });
        });
    });
    jQuery(function () {
        jQuery("#logo").click(function () {
            jQuery.get("main_page.html",function (html) {
                jQuery("#main_page").html(html);
            });
        });
    });
    jQuery("#main_page").position({
        my:"center top+20",
        at:"center bottom",
        of:"#nav"
    });
    jQuery.get("main_page.html",function (html) {
        jQuery("#main_page").html(html);
    });
});