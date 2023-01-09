const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]

const carouselElement = document.querySelector('.carousel');

for (let index = 0; index < array.length; index++) {
    console.log(images[index]);

    carouselElement.innerHTML =  ` <div class="slide current">
                                         <img src="${images[index]}" alt="">
                                    </div> ` 
    
}