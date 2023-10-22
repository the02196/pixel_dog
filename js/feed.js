const body = document.querySelector("body");

function createEle(element, className, parentName) {
  ele = document.createElement(element);
  ele.className = className;
  parentName.appendChild(ele);
}

createEle("div", "pixel-canvas", body);

const pixelCanvas = document.querySelector(".pixel-canvas");

createEle("div", "dog", pixelCanvas);

function dogMove() {
  setInterval(() => {
    document.querySelector(".dog").classList.toggle("move");
  }, 1000);
}
dogMove();

let num = 50;
let allPixelsNum = num * num;

function pixelCanvasWidthHeight() {
  pixelCanvas.style.width = `${num * 10}px`;
  pixelCanvas.style.height = `${num * 9}px`;
}

pixelCanvasWidthHeight();

for (i = 0; i < allPixelsNum; i++) {
  let pixel = document.createElement("div");
  pixel.className = "pixel";
  pixelCanvas.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixel");

let r_Count = 0;
let c_Count = 1;

function plusCounts() {
  r_Count++;
  if (r_Count > num) {
    r_Count = 1;
    c_Count++;
  }
}

function addClassNameRowAndColumn() {
  for (i = 0; i < allPixelsNum; i++) {
    plusCounts();
    pixels[i].classList.add(`c-${c_Count}`);
    for (index = 0; index < num; index++) {
      pixels[i].classList.add(`r-${r_Count}`);
    }
  }
}

addClassNameRowAndColumn();

function autoChangePixelBgColor() {
  let autoPlayTimer = Math.floor(Math.random() * 80 + 30);
  let c_Number = 1;
  let r_Number = Math.floor(Math.random() * 8 + 11);
  const interval = setInterval(() => {
    c_Number++;
    if (r_Number < 12) {
      r_Number = 12;
    } else if (c_Number == 28) {
      clearInterval(interval);
    }
    let food = document.querySelector(`.pixel.c-${c_Number}.r-${r_Number}`);
    food.classList.add("on");

    let removeFood = document.querySelector(
      `.pixel.c-${c_Number - 1}.r-${r_Number}`
    );
    removeFood.classList.remove("on");
  }, autoPlayTimer);
}

function drawPlate() {
  for (i = 10; i < 21; i++) {
    let plate = document.querySelector(`.pixel.c-30.r-${i}`);
    plate.classList.add("plate");
  }
  for (i = 11; i < 20; i++) {
    let plate = document.querySelector(`.pixel.c-29.r-${i}`);
    plate.classList.add("plate-top");
  }
}

function removeAllFood() {
  pixels.forEach((pixel) => {
    pixel.classList.remove("on");
  });
}

for (let i = 0; i < 50; i++) {
  autoChangePixelBgColor();
}

function feed() {
  setInterval(() => {
    for (let i = 0; i < 50; i++) {
      autoChangePixelBgColor();
    }
    setTimeout(() => {
      removeAllFood();
    }, 20);
  }, 4000);

  drawPlate();
}

feed();
