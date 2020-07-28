$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).width()>991){
            if($(window).scrollTop()>=100){
                $("header").addClass("st");
            }
            else {
                $("header").removeClass("st");
            }
        }
        else{
            $("header").addClass("st");
        }
    })
    $("header .navbar .navbar-nav .nav-item .nav-link").on('click',function(){
        $("header .navbar .navbar-nav .nav-item .nav-link").removeClass("active");
        $(this).addClass("active");
    })
     var navh = $("header").height();
    $(document).on("scroll", function(){
        var currentpos = $(document).scrollTop();
        $("section").each(function(){
            var self = $(this);
            if(self.offset().top<(currentpos + navh) && (currentpos + navh)<(self.offset().top + self.outerHeight())){
                var target = "header .navbar .navbar-nav .nav-item .nav-link."+self.attr("class");
                $("header .navbar .navbar-nav .nav-item .nav-link").removeClass("active");
                $(target).addClass("active");
            }
        })
    })
    $(".blog .box .blog-btn").click(function(){
        alert("sorry There are not enough information..thank you");
    })
    $(".contact form .sub-btn").click(function(){
        alert("Your Information is sussessfully Submited...");
    })
})