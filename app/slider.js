
const betterSlider = (() => {
    const sliders = document.getElementsByClassName('slider');
    const slides = document.getElementsByClassName('slider__slide');
    const left = document.getElementsByClassName('slider__arrow--left');
    const right = document.getElementsByClassName('slider__arrow--right');

    let sliderSlides = {};
    let currentSlides = {};

    const initSlides = (positionFunc) => {
        if(sliders.length >= 1){
            [...sliders].forEach((item, index) => {
                sliderSlides[index] = item.getElementsByClassName('slider__slide');
                currentSlides[index] = 0;
            });
            positionFunc();
        }
    };

    const positionSlides = () => {
        [...sliders].forEach((item, index) => {
            [...sliderSlides[index]].forEach((item, index) => {
                if(index){
                    item.style.left = '100%';
                } 
                else{
                    item.style.left = 0;
                    item.classList.add('slider__active-slide');
                }
            });
        });
    };

    const moveLeft = (index) => {
        if(sliderSlides[index].length-1 > currentSlides[index]){
            sliderSlides[index][currentSlides[index]].style.left = '-100%';
            sliderSlides[index][currentSlides[index]].classList.remove('slider__active-slide');
            sliderSlides[index][currentSlides[index]+1].style.left = 0;
            sliderSlides[index][currentSlides[index]+1].classList.add('slider__active-slide');

            currentSlides[index] = currentSlides[index] + 1;

        } 
        else {
            [...sliderSlides[index]].forEach((slide) => {
                if(!slide.classList.contains('slider__active-slide')){
                    slide.style.left = '100%'
                }
            });

            setTimeout(() => {
                sliderSlides[index][currentSlides[index]].classList.remove('slider__active-slide');

                currentSlides[index] = 0;

                sliderSlides[index][currentSlides[index]].style.left = 0;
                sliderSlides[index][sliderSlides[index].length -1].style.left = '100%';
                
                sliderSlides[index][currentSlides[index]].classList.add('slider__active-slide');
            }, 200);
        }
    };

    const moveRight = (index) => {
        sliderSlides[index][currentSlides[index]].style.left = '100%';
        sliderSlides[index][currentSlides[index]].classList.remove('slider__active-slide');

        currentSlides[index] = currentSlides[index] ? currentSlides[index] -1 : sliderSlides[index].length -1;
        
        sliderSlides[index][currentSlides[index]].style.left = 0;
        sliderSlides[index][currentSlides[index]].classList.add('slider__active-slide');
    };

    if(left.length) {
        [...left].forEach((item, index) => {
            item.addEventListener('click', () => {
                moveLeft(index);
            });
        });
    }

    if(right.length){
        [...right].forEach((item, index) => {
            item.addEventListener('click', () => {
                moveRight(index);
            });
        })
    }

    initSlides(positionSlides);
})();