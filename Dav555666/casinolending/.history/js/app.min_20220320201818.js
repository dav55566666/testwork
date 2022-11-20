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
    end_one = 0
    end_two = 0
    end_tree = 0
    var one = setInterval(function(){
        swipe()
        if(end_one>=500){
            $(".one").css("top","130%")
        }
        if(end_two>=700){
            $(".two").css("top","130%")
        }
        if(end_tree>=900){
            $(".three").css("top","130%")
            clearInterval(one)
        }
    },1)
})