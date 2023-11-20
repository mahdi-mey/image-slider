const imageWrapper = document.querySelector('.image-wrapper')
const sliderImages = document.querySelectorAll('.slider-container img')

// buttons 
const prevBtn = document.querySelector('.prev-wrapper')
const nextBtn = document.querySelector('.next-wrapper')

let counter = 1

// image width
const size = sliderImages[0].clientWidth

imageWrapper.style.transform = `translateX(${-size * counter}px)`

imageWrapper.addEventListener('transitionend', () => {
    if(sliderImages[counter].id === 'lastClone'){
        imageWrapper.style.transition = 'none'
        counter = sliderImages.length - 2
        imageWrapper.style.transform = `translateX(${-size * counter}px)`
    }
    if(sliderImages[counter].id === 'firstClone'){
        imageWrapper.style.transition = 'none'
        counter = sliderImages.length - counter
        imageWrapper.style.transform = `translateX(${-size * counter}px)`
    }
})

function nextImage(){
    if(counter >= sliderImages.length - 1) return;
    imageWrapper.style.transition = 'transform 0.5s ease-in-out'
    counter++
    imageWrapper.style.transform = `translateX(${-size * counter}px)`
}

function prevImage(){
    if(counter <= 0) return;
    imageWrapper.style.transition = 'transform 0.5s ease-in-out'
    counter--
    imageWrapper.style.transform = `translateX(${-size * counter}px)`
}

// eventlisteners for click
nextBtn.addEventListener('click', nextImage)
prevBtn.addEventListener('click', prevImage)


//event listeners for arrow buttons
document.addEventListener('keyup', e => {
    if(e.code === "ArrowRight"){
        nextImage()
    }
    else if(e.code === "ArrowLeft"){
        prevImage()
    }
})