const mb = document.querySelector("div.mouseball");
const errorSumElement = document.getElementById("errorSum");

let mouseX = -100;
let mouseY = -100;

let mbX = 0;
let mbY = 0;

const leftBarB = document.getElementById("ballfollowingleft");
const topBarB = document.getElementById("ballfollowingtop");

animate();

document.addEventListener("DOMContentLoaded", function () {
    const leftBarM = document.getElementById("mousefollowingleft");
    const topBarM = document.getElementById("mousefollowingtop");

    document.addEventListener("mousemove", function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        leftBarM.style.height = `${mouseY}px`;
        topBarM.style.width = `${mouseX}px`;
    });
});

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

    leftBarB.style.height = `${mbY}px`;
    topBarB.style.width = `${mbX}px`;

    error();

    requestAnimationFrame(animate);
}

function error() {
    const errorX = mouseX - mbX;
    const errorY = mouseY - mbY;

    const error = Math.sqrt(errorX * errorX + errorY * errorY);

    errorSumElement.textContent = `γ = ${error.toFixed(5)}`;
}