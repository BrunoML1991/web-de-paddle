jQuery(function () {
    jQuery(function () {
        jQuery("#log_in").click(function () {
            jQuery("#main_page").load('Previo/login.html')
            alert("Hola")
        });
    });
    jQuery(function () {
        jQuery("#inicio").click(function () {
            jQuery("#main_page").load('main_page.html')
        });
    });
    jQuery(function () {
        jQuery("#logo").click(function () {
            jQuery("#main_page").load('main_page.html')
        });
    });
    jQuery("#main_page").position({
        my:"center top+20",
        at:"center bottom",
        of:"#nav"
    });
    //jQuery("#main_page").load('main_page.html');
});