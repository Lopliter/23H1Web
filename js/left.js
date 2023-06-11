$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var forSize = $(".side_nav_scroll").length;
        for(i=0;i<forSize;i++){
            var plateTop = $(".side_nav_scroll").eq(i).offset().top;
            if(scrollTop+120>=plateTop){
                $(".side_nav a").eq(i).addClass("f-hover").siblings("a").removeClass("f-hover");
            }
        }
    })
})