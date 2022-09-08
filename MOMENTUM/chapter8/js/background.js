const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
]

function randomNumber(){
    return Math.floor(Math.random() * images.length);
}

const chosenImage = images[randomNumber()];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage);
bgImage.id = 'bgImage';

