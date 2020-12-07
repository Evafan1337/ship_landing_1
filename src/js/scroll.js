$(document).on("scroll", window, function () {
    if ($(window).scrollTop()>2050) 
    {
        $("#navBack").show();
    }
    else
    {
        $("#navBack").hide();
    }
    });