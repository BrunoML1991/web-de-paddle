jQuery(function () {
    jQuery("#nombre").blur(function () {
        if (jQuery("#nombre").val()==""){
            jQuery("#nombre").attr("placeholder", "Elija un nombre de usuario");
            jQuery("#nombre").addClass('red-placeholder');
        }
    });
    jQuery("#correo").blur(function () {
        if (jQuery("#correo").val()==""||!isValidEmail(jQuery("#correo").val())){
            jQuery("#correo").attr("placeholder", "Correo electrónico no válido");
            jQuery("#correo").addClass('red-placeholder');
            jQuery("#correo").val("")
        }
    });
    jQuery("#clave2").blur(function () {
        let clave = jQuery("#clave");
        let clave2 = jQuery("#clave2");
        if (clave.val() == ""|| clave2.val()==""){
            clave.attr("placeholder", "Ha de introducir una clave de acceso");
            clave.addClass('red-placeholder');
            clave2.attr("placeholder", "Ha de introducir una clave de acceso");
            clave2.addClass('red-placeholder');
        }if (clave.val() != clave2.val()){
            clave.attr("placeholder", "Las claves deben coincidir");
            clave.addClass('red-placeholder');
            clave2.attr("placeholder", "Las claves deben coincidir");
            clave2.addClass('red-placeholder');
            clave.val("");
            clave2.val("");
        }
    });
    jQuery('#fecha_nac').datepicker({
        dateFormat: "dd/mm/yy",
        dayNamesMin: ["D","L","M","X","J","V","S"],
        firstDay:1,
    });
    jQuery('#fecha_nac').click(function (){
        jQuery('#fecha_nac').datepicker("show");
    });
    function isValidEmail(mail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    }
});