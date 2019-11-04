$(document).on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
        topSpace = 30;
    //alert(id);
    $('html, body').animate({
        scrollTop: $(id).offset().top - topSpace
    }, 800);
});