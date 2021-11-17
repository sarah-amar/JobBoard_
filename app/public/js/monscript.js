$(".button").on("click", function() {
    console.log("im here");
    $(this).parent().find(".more").toggle();
    if ($(this).parent().find(".more").is(":visible")) {
        $(this).html("Learn less <i class='bi bi-caret-up-fill'></i>");
    } 
    else {
        $(this).html("Learn more <i class='bi bi-caret-down-fill'></i>");
    }
});



$(".apply").on("click", function () {
    $(this).parent().find(".form").toggle();
})

$(window).on('resize', function(e) {
    var windowWidth = $(window).width();

    if (windowWidth < 900) {
        $(".btn").on("click", function () {
            $(this).parent().find(".all-filters").toggle();
        });
    } else {
        $( document ).ready(function() {
            $(".btn").show();
        });
    }
  });

