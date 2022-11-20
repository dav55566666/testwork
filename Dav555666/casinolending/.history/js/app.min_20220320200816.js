var set_one = 0;
$(".switch").click(function(){
    var one = setInterval(function(){
        set_one++
        console.log(set_one)
        $(".one").css("top",""+set_one+"%")
        if(set_one>=200){
            
            set_one=0
            $(".one").css("top",""+set_one+"%")
        }
    },10)
})