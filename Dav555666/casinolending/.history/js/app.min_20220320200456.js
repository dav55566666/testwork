var set_one = 0;
$(".switch").click(function(){
    var one = setInterval(function(){
        if(set_one==0){
            $(".one").css("top","130%")
            set_one=1
        }else{
            $(".one").css("top","-190%")
            set_one=0
        }
    },500)
})