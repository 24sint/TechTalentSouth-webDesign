$(document).ready(function(){
    
    var toggle = 0;
    $("button").click(function() { 
        var imgs = ["image/jerusalem_2.jpg","image/20180927_173505.jpg"];
        var imageUrl = "image/jerusalem_2.jpg"; 
           $(".bg-img").css("background-image", "url(" + imageUrl + ")"); 
           
           if (toggle == 1){
               toggle = 0;
           }else{
               toggle = 1; 
           }
           $(".bg-img").css("background-image", "url(" + imgs[toggle] + ")");

    }); 

    $(".contact-form").mouseover(function(){
        $(".contact-form").css("background-color", "lightgray");
    });

    $(".contact-form").mouseout(function(){
        $(".contact-form").css("background-color", "lightskyblue");
    });

    $(".about-me").mouseover(function(){
        $(".about-me").css("background-color", "lightskyblue");
    });

    $(".about-me").mouseout(function(){
        $(".about-me").css("background-color", "white");
    });
 });
 
