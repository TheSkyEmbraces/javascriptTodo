const images = [
    "1.jpg", "2.jpg", "3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img"); //요소를 만드는 방법

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage) //appendChild는 가장 마지막에 요소를 추가한다.