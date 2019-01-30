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


$(".slidetoggle").click(function() {
    $(".slidetog").slideToggle("slow", function() {});
})

$("a").click(function() {
    $(".divdiv").fadeIn(3000, function() {
        $('.spanspan').fadeIn(100);
    });
    return false;
});
$('.ppp').click(function() {
    $('.ppp').fadeOut('slow');
})


$(".addclass").addClass("red");

$('.pppp').append($('<strong>YOOOOOOO</strong>'));

$(".before").before("<h2>Something is</h2>");
$("h2,.before").addClass("inlineblock");

$(".after").after("<span> is something!</span>");