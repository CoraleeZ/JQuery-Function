$(".smyup").click(function() {
    $(this).slideUp();
});

$(".hide h1").click(function() {
    $(this).hide();
})

$(".smyup").click(function() {
    $(this).slideDown();
})

$(".toggle").click(function() {
    $(".toggle p").toggle();
})

$(".show").click(function() {
    $(".hide h1").show();
})
<<<<<<< HEAD

$(".slidetoggle").click(function() {
    $(".slidetog").slideToggle("slow", function() {});
})
=======
$("a").click(function() {
    $(".divdiv").fadeIn( 3000, function()  {
        $( '.spanspan').fadeIn( 100 );
    });
    return false;
});
>>>>>>> b51da1bcb53400fb71b8c45c56da2cad4c78be77
