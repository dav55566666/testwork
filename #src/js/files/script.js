new WOW().init();
var rang_value = 0;
$("input[type='range']").on("input", function(){
    rang_value = $(this).val()
    $(this).parent().siblings(".range__text").children(".range__value").text(""+rang_value+" %")
})
var bulletsmax = 4;
function addbulet(){
    var scheme = $(".scheme__item");
    var bullets = 0
    $(".bullets span").remove()
    for(var i = 0; i <= scheme.length; i++){
        if(i<scheme.length-1){
            $(scheme[i]).children(".bullets").html("<span></span><span></span><span></span><span></span><span></span>")
        }
    }
}
addbulet()
$(window).resize(function(){
    addbulet()
})
var menu = 0;
$(".burgermenu_btn").click(function(){
    if(menu==0){
        $(".burgermenu_btn").addClass("active");
        $(".header-container__navigation").css("width", "100%");
        menu=1;
    }else{
        $(".burgermenu_btn").removeClass("active");
        $(".header-container__navigation").css("width", "0");
        menu=0;
    }
})