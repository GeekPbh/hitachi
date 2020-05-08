(function($){
    //实现登录框效果
    var loginbox = $(".loginbox");
    var count = 0 //画轴滑动计数器
    $(".switcher span").each(function(i,e){
        jQuery(this).on("click",function(){
            $("#slider .sliderBox div").each(function(j,e){
                if(i==j){
                    jQuery(this).fadeIn(500);
                    $(".switcher span").eq(j).attr("class","curr");
                }else{
                    jQuery(this).fadeOut(500);
                    $(".switcher span").eq(j).attr("class","");
                }
            })
        })
    });

    //画轴切换
    $("#btnPre").on("click",function(){
        count--;
        if(count<0){count=0;return;}
        $("#slider1 .sliderBox .move").animate({'left':-count*1004+"px"},500);
    })
    $("#btnNext").on("click",function(){
        count++;
        if(count>2){count=2;return;}    
        $("#slider1 .sliderBox .move").animate({'left':-count*1004+"px"},500);
    });
    $(".selectArea").children().each(function(i){
        jQuery(this).children().eq(0).on("click",function(){
            if(this.parentNode.className=='item'){
                this.parentNode.className='item itemOpen';
            }else{
                this.parentNode.className='item';
            }
        });
    });

})(jQuery);