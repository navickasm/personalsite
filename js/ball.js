const mb = document.querySelector("div.mouseball");

let mouseX = -100;
let mouseY = -100;

let mbX = 0;
let mbY = 0;

animate();

document.addEventListener("mousemove", function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
})

function animate() {
    let distX = mouseX - mbX;
    let distY = mouseY - mbY;

    mbX = mbX + (distX * 0.1);
    mbY = mbY + (distY * 0.1);

    mb.style.left = mbX + "px";
    mb.style.top = mbY + "px";

    requestAnimationFrame(animate);
}