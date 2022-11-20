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
$("body").click(function(){
    $(".popup").css("display","none")
})
$(".clickspin").click(function(){
    end_one = 0
    end_two = 0
    end_tree = 0
    var one = setInterval(function(){
        if(spined==0){
            if(spin==0){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(67%)")
                $(".drum_active").show()
                $(".drumbg").hide()
                if(end_one>=500){
                    $(".one").css("top","-109%")
                }
                if(end_two>=700){
                    $(".two").css("top","-27%")
                }
                if(end_tree>=900){
                    $(".three").css("top","53%")
                    spined=0
                    spin+=1
                    clearInterval(one)
                    $(".drum_active").hide()
                    $(".drumbg").show()
                    $(".no-luck").show()
                    return
                }
            }
            if(spin==1){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(44%)")
                $(".drum_active").show()
                $(".drumbg").hide()
                if(end_one>=500){
                    $(".one").css("top","-109%")
                }
                if(end_two>=700){
                    $(".two").css("top","-109%")
                }
                if(end_tree>=900){
                    $(".three").css("top","-109%")
                    spined=0
                    spin+=1
                    clearInterval(one)
                    $(".drum_active").hide()
                    $(".drumbg").show()
                    $(".you-win").show()
                    return
                }
            }
            if(spin==2){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(20%)")
                $(".drum_active").show()
                $(".drumbg").hide()
                if(end_one>=500){
                    $(".one").css("top","-27%")
                }
                if(end_two>=700){
                    $(".two").css("top","-27%")
                }
                if(end_tree>=900){
                    $(".three").css("top","-27%")
                    spined=0
                    spin+=1
                    clearInterval(one)
                    $(".drum_active").hide()
                    $(".drumbg").show()
                    $(".add-spin").show()
                    $(".drum__spins-num img").css("transform","translateY(44%)")
                    return
                }
            }
            if(spin==3){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(20%)")
                $(".drum_active").show()
                $(".drumbg").hide()
                if(end_one>=500){
                    $(".one").css("top","130%")
                }
                if(end_two>=700){
                    $(".two").css("top","130%")
                }
                if(end_tree>=900){
                    $(".three").css("top","130%")
                    spined=0
                    clearInterval(one)
                    $(".respin").show()
                    $(".drum_active").hide()
                    $(".drumbg").show()
                    swipe()
                    if(end_one>=500){
                        $(".one").css("top","53%")
                    }
                    if(end_two>=700){
                        $(".two").css("top","53%")
                    }
                    if(end_tree>=900){
                        $(".three").css("top","53%")
                        end_one = 0
                        end_two = 0
                        end_tree = 0
                        spined=0
                        clearInterval(one)
                        $(".drum_active").hide()
                        $(".drumbg").show()
                        setTimeout(function(){
                            var respin = setInterval(function(){
                                swipe()
                                $(".ёpopap").css("display","none")
                                $(".drum_active").show()
                                $(".drumbg").hide()
                                $(".drum__spins-num img").css("transform","translateY(20%)")
                                if(end_one>=500){
                                    $(".one").css("top","-109%")
                                }
                                if(end_two>=700){
                                    $(".two").css("top","-27%")
                                }
                                if(end_tree>=900){
                                    $(".three").css("top","53%")
                                    spined=0
                                    $(".drum_active").hide()
                                    $(".drumbg").show()
                                    spin+=1
                                    $(".popup").hide()
                                    $(".no-luck").show()
                                    clearInterval(respin)
                                    return
                                }
                            },1)
                        },300)
                    }
                }
            }
            if(spin==4){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(-4%)")
                $(".drum_active").show()
                $(".drumbg").hide()
                if(end_one>=500){
                    $(".one").css("top","53%")
                }
                if(end_two>=700){
                    $(".two").css("top","53%")
                }
                if(end_tree>=900){
                    $(".three").css("top","53%")
                    spined=0
                    spin+=1
                    clearInterval(one)
                    $(".drum_active").hide()
                    $(".drumbg").show()
                    $(".next-win").show()
                    setTimeout(function(){
                        $(".total-win").show()
                    },500)
                    return
                }
            }
        }
    },1)
})