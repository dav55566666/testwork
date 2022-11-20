var set_one = 0;
var end_one = 0
var end_two = 0
var end_tree = 0
var spin = 0
var spined = 0
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
    spin+=1
    if(spined==0){
        var one = setInterval(function(){
            spined=1
            if(spin==0){
                swipe()
                if(end_one>=500){
                    $(".one").css("top","-106%")
                }
                if(end_two>=700){
                    $(".two").css("top","-23%")
                }
                if(end_tree>=900){
                    $(".three").css("top","55%")
                    spined=0
                    clearInterval(one)
                }
            }
            if(spin==1){
                swipe()
                if(end_one>=500){
                    $(".one").css("top","-106%")
                }
                if(end_two>=700){
                    $(".two").css("top","-106%")
                }
                if(end_tree>=900){
                    $(".three").css("top","-106%")
                    clearInterval(one)
                }
            }
            if(spin==2){
                swipe()
                if(end_one>=500){
                    $(".one").css("top","-23%")
                }
                if(end_two>=700){
                    $(".two").css("top","-23%")
                }
                if(end_tree>=900){
                    $(".three").css("top","-23%")
                    clearInterval(one)
                }
            }
            if(spin==3){
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
            }
            if(spin==4){
                swipe()
                if(end_one>=500){
                    $(".one").css("top","55%")
                }
                if(end_two>=700){
                    $(".two").css("top","55%")
                }
                if(end_tree>=900){
                    $(".three").css("top","55%")
                    clearInterval(one)
                }
            }
        },1)
    }
})