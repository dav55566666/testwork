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
    console.log(spin)
    var one = setInterval(function(){
        if(spined==0){
            if(spin==0){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(67%)")
                $(".drum").css("background","url(../img/spineddrum.png) no-repeat")
                if(end_one>=500){
                    $(".one").css("top","-106%")
                }
                if(end_two>=700){
                    $(".two").css("top","-23%")
                }
                if(end_tree>=900){
                    $(".three").css("top","55%")
                    spined=0
                    spin+=1
                    clearInterval(one)
                    $(".drum").css("background","url(../img/drum-1.png) no-repeat")
                    return
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
                    spined=0
                    spin+=1
                    clearInterval(one)
                    return
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
                    spined=0
                    spin+=1
                    clearInterval(one)
                    return
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
                    spined=0
                    spin+=1
                    clearInterval(one)
                    return
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
                    spined=0
                    spin+=1
                    clearInterval(one)
                    return
                }
            }
        }
    },1)
})