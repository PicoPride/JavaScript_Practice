let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function(det){
    cursor.style.opacity = 1;
    cursor.style.left = det.x + "px";
    cursor.style.top = det.y + "px";
    console.log(det.x, det.y);
})
main.addEventListener("mouseleave",function(){
    cursor.style.opacity = 0;
    cursor.style.transition = "all ease 0.2s"
    
})