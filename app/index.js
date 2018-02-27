import '../assets/styles/index.scss';
import OverlayScrollbars from 'overlayscrollbars';
import './accordion';

const scroll = (()=>{
    OverlayScrollbars(document.querySelectorAll(".accordion__text-container"), { }); 
})();
