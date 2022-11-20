var set_one = 0;
var end_one = 0
var end_two = 0
var end_tree = 0
function swipe(){
    set_one+=5
    end_one++
    end_two++
    end_tree++
    console.log(end_two)
    $(".one").css("top",""+set_one+"%")
    $(".two").css("top",""+set_one+"%")
    $(".three").css("top",""+set_one+"%")
    if(set_one>=200){
        set_one=0
        $(".one").css("top",""+set_one+"%")
        $(".two").css("top",""+set_one+"%")
        $(".three").css("top",""+set_one+"%")
    }
}
$(".switch").click(function(){
    var one = setInterval(function(){
        swipe()
        if(end_one>=700){
            $(".one").css("top","130%")
            // clearInterval(one)
        }
    },1)
    var two = setInterval(function(){
        swipe()
        if(end_two>=900){
            $(".one").css("top","130%")
            clearInterval(two)
        }
    },1)
    var tree = setInterval(function(){
        swipe()
        if(end_tree>=1100){
            $(".one").css("top","130%")
            clearInterval(tree)
        }
    },1)
})