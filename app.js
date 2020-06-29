const pages = [
    ["Restaurant",  "/page/restaurant.html"],
    ["Brewery", "/page/brewery.html"],
    ["Food",  "/page/food.html"],
    ["Beer",  "/page/beer.html"],
    ["Events",  "/page/events.html"],
    ["Gatherings",  "/page/gatherings.html"],
    ["News",  "/page/news.html"]
];

function renderHeaderAndFooter() {
    let header = document.createElement('header');
    header.innerHTML = `
    <div class="hero">
        <a class="logo" title="Cooper Mountain Ale Works" href="/"><span>Cooper Mountain Ale Works</span></a>
    </div>
    `;

    let menu = document.createElement('ul');
    menu.innerHTML = `
        <ul class="nav justify-content-center">
            ${pages.map(elm =>
                `<li class="nav-item">
                    <a class="nav-link" href="${elm[1]}">${elm[0]}</a>
                </li>`).join('')}
          
        </ul>
        `;

    let footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footercolumn">
            &copy;Cooper Mountain Ale Works 2020
        </div>    
        <div class="footercolumn">
            <p style="color: #FFFFFF; display: flex">
                <a style="color: #FFFFFF; flex: 1" href="https://www.facebook.com/CooperMountainAleWorks/" target="_blank"><i class="fab fa-fw fa-facebook-square fa-2x"></i></a>
                <a style="color: #FFFFFF; flex: 1" href="https://www.instagram.com/coopermountainaleworks/" target="_blank"><i class="fab fa-fw fa-instagram fa-2x"></i></a>
                <a style="color: #FFFFFF; flex: 1" href=" https://goo.gl/maps/guZYgJM1PAT5ykYx6" target="_blank"><i class="fas fa-map-marker fa-2x"></i></a>
            </p>
            <p><a href="mailto:info@coopermountainaleworks.com" style="color: #cc6633;">info@CooperMountainAleWorks.com</a></p>
            <span>12562 SW Main St, Tigard, OR 97223</span>
            <p>(503) 624-9400</p>
           
        </div>    
        <div class="footercolumn">
            <h5>Hours&nbsp;&nbsp;&nbsp;</h5>
            <table style="border-spacing: 10px 0px;   border-collapse: separate;" align="center">
                <tr><td>Sunday</td><td>3pm - 9pm</td></tr>
                <tr><td>Monday</td><td>Closed</td></tr>
                <tr><td>Tuesday</td><td>Closed</td></tr>
                <tr><td>Wednesday</td><td>3pm - 9pm</td></tr>
                <tr><td>Thursday</td><td>3pm - 9pm</td></tr>
                <tr><td>Friday</td><td>3pm - 9pm</td></tr>
                <tr><td>Saturday</td><td>3pm - 9pm</td></tr>
            </table>
        </div>`;

    document.body.prepend(menu);
    document.body.prepend(header);
    document.body.appendChild(footer);
}


renderHeaderAndFooter();
