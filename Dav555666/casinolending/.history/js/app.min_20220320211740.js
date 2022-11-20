var set_one = 0;
var end_one = 0
var end_two = 0
var end_tree = 0
var spin = 3
var spined = 0
var wins = ["img/popup-1.jpg","img/popup-2.jpg","img/popup-3.jpg","img/popup-4.jpg","img/popup-5.jpg","img/popup-6.jpg"]
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
    $(".prise_popap").css("display","none")
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
                $(".drum").css("background-image","url(img/spineddrum.png)")
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
                    $(".drum").css("background","url(img/drum.png) no-repeat")
                    $(".prise_popap img").attr("src", wins[0])
                    $(".prise_popap").css("display","flex")
                    return
                }
            }
            if(spin==1){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(44%)")
                $(".drum").css("background-image","url(img/spineddrum.png)")
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
                    $(".drum").css("background","url(img/drum.png) no-repeat")
                    $(".prise_popap img").attr("src", wins[1])
                    $(".prise_popap").css("display","flex")
                    return
                }
            }
            if(spin==2){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(20%)")
                $(".drum").css("background-image","url(img/spineddrum.png)")
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
                    $(".drum").css("background","url(img/drum.png) no-repeat")
                    $(".prise_popap img").attr("src", wins[2])
                    $(".prise_popap").css("display","flex")
                    $(".drum__spins-num img").css("transform","translateY(44%)")
                    return
                }
            }
            if(spin==3){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(20%)")
                $(".drum").css("background-image","url(img/spineddrum.png)")
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
                    $(".prise_popap img").attr("src", wins[3])
                    $(".prise_popap").css("display","flex")
                    $(".drum").css("background","url(img/drum.png) no-repeat")
                    swipe()
                    if(end_one>=500){
                        $(".one").css("top","55%")
                    }
                    if(end_two>=700){
                        $(".two").css("top","55%")
                    }
                    if(end_tree>=900){
                        $(".three").css("top","55%")
                        end_one = 0
                        end_two = 0
                        end_tree = 0
                        spined=0
                        spin+=1
                        clearInterval(one)
                        var respin = setInterval(function(){
                            swipe()
                            $(".prise_popap").css("display","none")
                            $(".drum").css("background","url(img/drum.png) no-repeat")
                            if(end_one>=500){
                                $(".one").css("top","-106%")
                            }
                            if(end_two>=700){
                                $(".two").css("top","-23%")
                            }
                            if(end_tree>=900){
                                $(".three").css("top","55%")
                                spined=0
                                $(".drum").css("background","url(img/drum.png) no-repeat")
                                $(".prise_popap img").attr("src", wins[0])
                                $(".prise_popap").css("display","flex")
                                clearInterval(respin)
                                $(".drum").css("background","url(img/drum.png) no-repeat")
                                return
                            }
                        },1)
                    }
                }
            }
            if(spin==4){
                swipe()
                $(".drum__spins-num img").css("transform","translateY(67%)")
                $(".drum").css("background-image","url(img/spineddrum.png)")
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
                    $(".drum").css("background","url(img/drum.png) no-repeat")
                    return
                }
            }
        }
    },1)
})