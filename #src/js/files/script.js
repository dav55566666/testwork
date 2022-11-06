var school_nav = $(".school_nav_item")

$(window).scroll(function () {
    var y = $(window).scrollTop()
    for (var i = 0; i < school_nav.length; i++) {
        if ($(school_nav[i]).data("src") != "")
            $(school_nav[i]).attr("data-position", $("" + $(school_nav[i]).data("src") + "").position().top - 80)
        if (y >= $(school_nav[i]).data("position")) {
            $(school_nav).removeClass("active")
            $(school_nav[i]).addClass("active")
            $(".school_nav_item").removeClass("removeborder")
            if ($(".school_nav_item.active").data("num") > 0) {
                $(school_nav[$(".school_nav_item.active").data("num") - 1]).addClass("removeborder")
            }
        }
    }
    console.log($(".school_nav_item.active").data("num"))
})

$(".school_nav_item").click(function () {
    $(".school_nav_item").removeClass("removeborder")
    $(".school_nav_item").removeClass("active")
    $(this).addClass("active")
    if ($(this).data("num") > 0) {
        $(school_nav[$(this).data("num") - 1]).addClass("removeborder")
    }
    let name = $(this).attr('data-src')
    $('html, body').animate({
        scrollTop: $(name).position().top - 80
    }, 500);
})