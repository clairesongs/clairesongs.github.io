

let money= 1000;
let opac= 10;
let itemIsSelected= false;
let phase="out";
let buyingQuantity= 0;
let currentItem= "";

document.addEventListener("DOMContentLoaded", function() {
let blink= setInterval(function() {
    if (phase=="out") {
    if (opac>1) {
        opac-=0.5;
        document.getElementById("sign").style.color= `rgba(46, 221, 272, ${opac/10})`;
        if (opac==1) {
           phase="in";
        }
    }
    } else {
        if (opac<10) {
            opac++;
            document.getElementById("sign").style.color= `rgba(255, 255, 0, ${opac/10})`;
            if (opac==10) {
               phase="out";
            }
        }
    }
}, 80);
})


