let main = document.querySelector("#elem1");
let elem = document.querySelector(".elem img ");

main.addEventListener("mousemove",function(dets){
    elem.style.opacity = 1;
    elem.style.left = dets.x + "px";
    elem.style.top = dets.y + "px"
    console.log(dets.x);
})
main.addEventListener("mouseleave",function(dets){
    elem.style.transform = "translate(-50%, -50%) scale(0)"
})