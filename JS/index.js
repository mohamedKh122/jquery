/// <reference types="../@types/jquery" />
$(".openNav").on("click", function(){
    $(".navBar").animate({width: "toggle"})
})
$(".fa-x").on("click", function(){
    $(".navBar").animate({width: "toggle"})
})

//Slider Section
$("#slider .toggle").on("click", function() {
    const currentInfo = $(this).next('.info')
    if (currentInfo.height() > 0) {
        currentInfo.animate({ height: 0 }, 200);
    } else {
        $('#slider .info').animate({ height: 0 }, 200);
        currentInfo.animate({ height: currentInfo[0].scrollHeight }, 200);
}})
//Counter Section
let theCountDate = new Date("2025")
let x = setInterval(function(){
    let now = new Date()
    let distance = theCountDate - now;
    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    $(".days").text(days + " Days")
    $(".hours").text(hours + " Hours")
    $(".minutes").text(minutes + " Minutes")
    $(".seconds").text(seconds+ " Seconds" )
},1000)    
// contact Section
$("textarea").on("input", function(){
    if(100 - $("textarea").val().length > 0){
        $(".charc span").text(100 - $("textarea").val().length)
    }else{
        $(".charc span").text("your available character finished")
    }
})