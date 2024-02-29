const images = ["img/0.jpeg", "img/1.jpeg", "img/2.jpeg"];

document.body.background = images[0];

function paintBackground() {
  document.body.background = images[Math.floor(Math.random() * images.length)];
}

paintBackground();
setInterval(paintBackground, 10000);

// const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
// const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
