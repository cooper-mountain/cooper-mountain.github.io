import {ensureStyleIsPresent} from "../util/domHelper.js";

let style = document.createElement('style');
style.innerHTML = `
    
    /* CUSTOMIZE THE CAROUSEL
    -------------------------------------------------- */
    
    /* Carousel base class */
    .carousel {
        margin-bottom: 4rem;
    }
    /* Since positioning the image, we need to help out the caption */
    .carousel-caption {
        bottom: 3rem;
        z-index: 10;
    }
    
    /* Declare heights because of positioning of img element */
    .carousel-item {
        height: 32rem;
    }
    .carousel-item > img {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 32rem;
        filter: brightness(0.5);
    }
    
    
    /* MARKETING CONTENT
    -------------------------------------------------- */
    
    /* Center align the text within the three columns below the carousel */
    .marketing .col-lg-4 {
        margin-bottom: 1.5rem;
        text-align: center;
    }
    .marketing h2 {
        font-weight: 400;
    }
    /* rtl:begin:ignore */
    .marketing .col-lg-4 p {
        margin-right: .75rem;
        margin-left: .75rem;
    }
    /* rtl:end:ignore */
    
    
    /* Featurettes
    ------------------------- */
    
    .featurette-divider {
        margin: 5rem 0; /* Space out the Bootstrap <hr> more */
    }
    
    /* Thin out the marketing headings */
    .featurette-heading {
        font-weight: 300;
        line-height: 1;
        /* rtl:remove */
        letter-spacing: -.05rem;
    }
    
    
    /* RESPONSIVE CSS
    -------------------------------------------------- */
    
    @media (min-width: 40em) {
        /* Bump up size of carousel content */
        .carousel-caption p {
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.4;
        }
    
        .featurette-heading {
            font-size: 50px;
        }
    }
    
    @media (min-width: 62em) {
        .featurette-heading {
            margin-top: 7rem;
        }
    }
    
    `;
document.head.append(style);

export default class CarouselBlock extends HTMLElement {

    /**
     * @param panels
     */
    constructor(panels) {
        super();
        this.panels = panels;
    }

    connectedCallback() {
        this.innerHTML = `
             
        
        `
    }

}

window.customElements.define('carousel-block', CarouselBlock);