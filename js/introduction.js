(function($){
    //实现登录框效果
    var loginbox=$(".loginbox");
    var count=0;
    loginbox.on("mouseover",function(){
        loginbox[0].className="loginbox loginboxcurr";
    });
    loginbox.on("mouseout",function(){
        loginbox[0].className="loginbox";
    });
    //banner轮播
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
        });
    });
})(jQuery);