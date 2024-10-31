var tl = gsap.timeline();
tl.to("#full", {
    x: 0,
    duration: 0.5
})
tl.from("#full h4",{
    y: -100,
    opacity: 0,
    duration: 0.48,
    stagger:0.68,
    ease:"power4"
})
tl.from("#full i", {
    opacity: 0,
    delay:1.2,
    duration:.6,
    ease:"power4"
});

var click=document.querySelector("#nav i");
var click2=document.querySelector("#full i");
tl.pause();
click.addEventListener("click",function(){
    click.computedStyleMap.opacity=0;
    tl.play();
});
click2.addEventListener("click",function(){
    click.style.opacity=1;
  tl.reverse();
});