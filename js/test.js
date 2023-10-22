const body = document.querySelector("body")

const pixelCanvas = document.createElement("div")
pixelCanvas.className = "pixel-canvas"
body.appendChild(pixelCanvas);

for(i = 0; i < 1800; i++){
    let pixel = document.createElement("div");
    pixel.className = "pixel"
    pixelCanvas.appendChild(pixel); 
}

const pixels = document.querySelectorAll(".pixel");

let number = 15
let number_2 = 13
let number_3 = 14

pixels[number].classList.add("on");

    
function makePlate(){
    for(i = 881; i < 888; i++){
        pixels[i].classList.add("plate")
    }
    for(i = 852; i < 857; i++){
        pixels[i].classList.add("plate-top")
    }
} 
makePlate()

function autoPlay(){


const interval = setInterval(() => {
    pixels[number].classList.add("off");
    pixels[number += 30].classList.add("on");
    if(number >= 822 && number <= 826 ){
        clearInterval(interval)
        setTimeout(() => {
            pixels[number].classList.remove("on");
            number = 15
        }, 2000);
    }
}, 70);

const interval_2 = setInterval(() => {
    pixels[number_2].classList.add("off");
    pixels[number_2 += 30].classList.add("on");
    if(number_2 >= 822 && number_2 <= 826 ){
        clearInterval(interval_2)
        setTimeout(() => {
            pixels[number_2].classList.remove("on");
            number_2 = 13
        }, 2000);
    } 
}, 60);

const interval_3 = setInterval(() => {
    pixels[number_3].classList.add("off");
    pixels[number_3 += 30].classList.add("on");
    if(number_3 >= 822 && number_2 <= 826 ){
        clearInterval(interval_3)
        setTimeout(() => {
            pixels[number_3].classList.remove("on");
            pixels.forEach((e)=>{
                e.classList.remove("off");
                e.classList.remove("on");
            })
            number_3 = 14
        }, 2000);
    }
}, 80);
}

autoPlay()
setInterval(() => {
    autoPlay()
}, 5000);