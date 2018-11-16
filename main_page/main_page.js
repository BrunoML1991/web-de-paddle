jQuery(function () {

    jQuery("#lessons_div").toggle("fold",1);
    setTimeout(function (){jQuery("#lessons_div").toggle("fold")}, 800);

    jQuery("#personal_lessons_div").toggle("fold",1);
    setTimeout(function (){jQuery("#personal_lessons_div").toggle("fold")}, 800);

    jQuery("#championship_div").toggle("fold",1);
    setTimeout(function (){jQuery("#championship_div").toggle("fold")}, 800);

    //Positions
    jQuery("#pista_padel").position({
        my: "center top",
        at: "center top",
        of: "#main_page"
    });
    jQuery("#etsisi_logo").position({
        my: "left+20 top+20",
        at: "left top",
        of: "#pista_padel"
    });
    jQuery("#paddle_text").position({
        my: "center top",
        at: "right bottom+60",
        of: "#etsisi_logo"
    });
});