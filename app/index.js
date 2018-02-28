import '../assets/styles/index.scss';
import OverlayScrollbars from 'overlayscrollbars';
import './accordion';
import './slider';

const scroll = (()=>{
    OverlayScrollbars(document.querySelectorAll(".accordion__text-container"), { }); 
})();
