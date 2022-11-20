var set_one = 0;
$(".switch").click(function(){
    var one = setInterval(function(){
        set_one++
        if(set_one>=200){
            $(".one").css("top",""+set_one+"%")
            set_one=0
        }
    },10)
})