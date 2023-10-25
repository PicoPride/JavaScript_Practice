let imgclick = document.querySelector(".img-container");
let love = document.querySelector(".luv");
let redLove = document.querySelector(".red-luv");

imgclick.addEventListener("dblclick", function(){
    love.style.transform =  "translate(-50%, -50%) scale(1)";
    love.style.opacity = 0.7;
    redLove.style.color = "red";
    setTimeout(function(){
        love.style.opacity = 0;
    },900)
    setTimeout(function(){
        love.style.transform =  "translate(-50%, -50%) scale(0)";
    }, 1500)
})