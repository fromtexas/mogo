
const accordion = (() => {
    const accordionItems = document.getElementsByClassName('accordion__item');
    const accordionHeaders = document.getElementsByClassName('accordion')[0];

    let textContainer = null;
    let arrow = null;

    /// click
    
    accordionHeaders.addEventListener('click', (e) => {
        
        if(e.target && e.target.className === 'accordion__item-header'
         || e.target.nodeName === 'svg'
         || e.target.nodeName === 'use' 
         || e.target.className === 'accordion__title'
        ){
           textContainer = e.target.parentNode.getElementsByClassName('accordion__text-container')[0];
           arrow = e.target.getElementsByClassName('accordion__arrow-icon')[0];
        }

        if(textContainer.style.height === '0px'){
            textContainer.style.padding = '1.5rem';
            textContainer.style.height = '20rem';
            textContainer.style.borderBottom = '1px solid rgba(159, 159, 159, 0.5)';
            arrow.style.transform = 'rotate(180deg)';
        } else{
            textContainer.style.height = 0;
            textContainer.style.padding = 0;
            textContainer.style.borderBottom = 'none';
            arrow.style.transform = 'rotate(0deg)';
        }
        
    });

    //////init

    [...accordionItems].forEach((item, index) => {
        if(index){
            textContainer = accordionItems[index].getElementsByClassName('accordion__text-container')[0];
            textContainer.style.height = 0;
            textContainer.style.padding = 0;
            textContainer.style.borderBottom = 'none';
        }
        else{
            accordionItems[index].getElementsByClassName('accordion__arrow-icon')[0].style.transform = 'rotate(180deg)';
        }
    });
    
})();