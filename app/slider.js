const slider = (() => {
    const slides = document.getElementsByClassName('slider__slide');
    const left = document.getElementsByClassName('slider__arrow--left')[0];
    const right = document.getElementsByClassName('slider__arrow--right')[0];

    let currentSlide = 0;

    [...slides].forEach((item, index) => {
        if(index){
            item.style.left = '100%';
        } else{
            item.style.left = 0;
            item.classList.add('slider__active-slide');
        }
    });

    left.addEventListener('click', () => {

        if(slides.length-1 > currentSlide){
            slides[currentSlide].style.left = '-100%';
            slides[currentSlide].classList.remove('slider__active-slide');

            slides[currentSlide+1].style.left = 0;
            slides[currentSlide+1].classList.add('slider__active-slide');

            currentSlide = currentSlide + 1;

        } else {
            [...slides].forEach((slide) => {
                if(!slide.classList.contains('slider__active-slide')){
                    slide.style.left = '100%'
                }
            });

            setTimeout(() => {
                slides[currentSlide].classList.remove('slider__active-slide');

                currentSlide = 0;

                slides[currentSlide].style.left = 0;

                slides[slides.length-1].style.left = '100%';
                
                slides[currentSlide].classList.add('slider__active-slide');
            }, 200);

        }    
    });

    right.addEventListener('click', () => {

        slides[currentSlide].style.left = '100%';
        slides[currentSlide].classList.remove('slider__active-slide');

        currentSlide = currentSlide ?  currentSlide -1 : slides.length-1;
        
        slides[currentSlide].style.left = 0;
        slides[currentSlide].classList.add('slider__active-slide');      
    });

})();