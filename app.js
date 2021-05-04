
const pages = [
    ["Home",  "/"],
    ["Brewery", "/page/brewery.html"],
    ["Food",  "/page/food.html"],
    ["To Go", "https://versieats.com/menu-coopermountain"],
    ["Beer",  "/page/beer.html"],
    ["Events",  "/page/events.html"],
    ["Gatherings",  "/page/gatherings.html"]
];

function renderHeaderAndFooter() {

    console.log(window.location.pathname);

    let header = document.createElement('header');
    header.innerHTML = `
         <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="/"><img width="200" src="/images/logo_inverted.png" /></a>>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                  ${pages.map(elm =>
                    `<li class="nav-item">
                        <a class="nav-link  ${window.location.pathname === elm[1] ? 'active' : ''}" href="${elm[1]}">${elm[0]}</a>
                    </li>`).join('')}
                </ul>
            </div>
        </nav>
        `;

    let footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footercolumn">
            &copy;Cooper Mountain Ale Works 2021
        </div>    
        <div class="footercolumn">
            <p style="color: #FFFFFF; display: flex">
                <a style="color: #FFFFFF; flex: 1" href="https://www.facebook.com/CooperMountainAleWorks/" target="_blank"><i class="fab fa-fw fa-facebook-square fa-2x"></i></a>
                <a style="color: #FFFFFF; flex: 1" href="https://www.instagram.com/coopermountainaleworks/" target="_blank"><i class="fab fa-fw fa-instagram fa-2x"></i></a>
                <a style="color: #FFFFFF; flex: 1" href=" https://goo.gl/maps/guZYgJM1PAT5ykYx6" target="_blank"><i class="fas fa-map-marker fa-2x"></i></a>
            </p>
            <p><a href="mailto:info@coopermountainaleworks.com" style="color: #cc6633;">info@CooperMountainAleWorks.com</a></p>
            <span>12562 SW Main St, Tigard, OR 97223</span>
            <p>(503) 624-8900</p>
           
        </div>    
        <div class="footercolumn">
            <h5>Hours&nbsp;&nbsp;&nbsp;</h5>
            <table style="border-spacing: 10px 0px;   border-collapse: separate;" align="center">
                <tr><td>Sunday</td><td>12pm - 8pm</td></tr>
                <tr><td>Monday</td><td>Closed</td></tr>
                <tr><td>Tuesday</td><td>12pm - 8pm</td></tr>
                <tr><td>Wednesday</td><td>12pm - 8pm</td></tr>
                <tr><td>Thursday</td><td>12pm - 8pm</td></tr>
                <tr><td>Friday</td><td>12pm - 8pm</td></tr>
                <tr><td>Saturday</td><td>12pm - 8pm</td></tr>
            </table>
        </div>`;

    document.body.prepend(header);
    document.body.appendChild(footer);
}


renderHeaderAndFooter();
