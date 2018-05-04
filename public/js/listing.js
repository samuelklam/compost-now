function addListing() {

    var listing = {
        id: uniqueId("listing"),
        title: document.getElementById("title").value,
        restaurant: "Sweet Green",
        category: document.getElementById("category").value,
        weight: document.getElementById("weight").value,
        description: document.getElementById("description").value,
        instructions: document.getElementById("instructions").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        status: "Awaiting Pickup",
        imageUrl: "images/compost_listings/fruits_and_veggies_scraps.jpg",
        pageUrl: "compost_listings/fruits_and_veggies.html"
    }
    console.log(document.getElementById("title").value)
    listings.push(listing);
    

    // save in local storage
    localStorage.setItem('listings', JSON.stringify(listings));
    console.log(listings);

    render(listings);
}

function loadListing(id) {
    
}

let listings = [
    {
        id: "listing_0",
        title: "Fruits and Veggies Scraps",
        restaurant: "Sweet Green",
        category: "Fruits, Vegetables",
        weight: "20 lbs",
        description: "Get your fruit and veggie scraps!",
        instructions: "Pick up at the back",
        date: "04-28-2018",
        time: "15:00",
        status: "Awaiting Pickup",
        imageUrl: "images/compost_listings/fruits_and_veggies_scraps.jpg",
        pageUrl: "compost_listings/fruits_and_veggies.html"
    },
    {
        id: "listing_1",
        title: "Egg Shells",
        restaurant: "Legal Seafoods",
        category: "Other",
        weight: "5 lbs",
        description: "Get your egg shells!",
        instructions: "Pick up at the front",
        date: "04-29-2018",
        time: "14:00",
        status: "Awaiting Pickup",
        imageUrl: "images/compost_listings/egg_shells.jpg",
        pageUrl: "compost_listings/fruits_and_veggies.html"
    },
    {
        id: "listing_2",
        title: "Pasta",
        restaurant: "Grafton Street",
        category: "Grains",
        weight: "12 lbs",
        description: "Get your pasta scraps!",
        instructions: "Pick up at the side",
        date: "04-30-2018",
        time: "13:00",
        status: "Awaiting Pickup",
        imageUrl: "images/compost_listings/pasta.jpg",
        pageUrl: "compost_listings/fruits_and_veggies.html"
    }
]

// prints note array into the console for debugging
console.log(listings)

// returns the HTML code for a listing
function renderCompostListings(listing) {
    return `<li id="${listing.id}" class="product type-product">
                <div class="vertical-item">
                    <div class="item-media with_background bottommargin_30">
                        <img src="${listing.imageUrl}" alt="" />
                    </div>
                    <div class="item-content">
                        <h4 class="poppins bottommargin_10">
                            <a href="${listing.pageUrl}">${listing.title}</a>
                        </h4>
                        <p class="price">
                            <ins>
                                <span class="amount">${listing.weight}</span>
                            </ins>
                        </p>
                        <a href="${listing.pageUrl}" class="linkbutton" class="theme_button color1">Request Pickup</a>
                    </div>
                </div>
            </li>`
}

function renderAdminProducts(listing) {
    return `<tr id="${listing.id}" class="item-editable"> 
                <td>
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src="images/shop/01.png" alt="...">
                        </div>
                        <div class="media-body media-middle">
                            <h5>
                                <a href="images/shop/01.png">${listing.title}</a>
                            </h5>
                        </div>
                    </div>
                </td>
                <td class="media-middle">
                    ${listing.weight}
                </td>
                <td class="media-middle">
                    ${listing.category}
                </td>											
                <td class="media-middle">
                    <time datetime="2017-02-08T20:25:23+00:00" class="entry-date">${listing.date} at ${listing.time}</time>
                </td>
            </tr>`
}

// renders notes by calling renderNote on each note
function render(listings) {

    url = window.location.pathname;

    
    let compostlistingsElm = document.querySelector('.compostlistings');

    if (url == "/public/compost_listings.html" || url == "/compost_listings.html") {
        // compost_listings.html
        compostlistingsElm.innerHTML = listings.map(p => renderCompostListings(p)).join('');
    } else if (url == "/public/admin_products.html" || url =="/admin_products.html") {
        // admin_products.html
        compostlistingsElm.innerHTML = listings.map(p => renderAdminProducts(p)).join('');
    }

    let buttons = document.querySelectorAll(".linkbutton");
    buttons.forEach(button => button.addEventListener("click", loadListing));
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function uniqueId (prefix) {
    let id = new Date().valueOf().toString(36);
    sleep(1);// wait for one millisecond to avoid duplicates
    return (prefix ? prefix + id    : id);
};

// initialize page
function initialize() {
    let initState = localStorage.getItem('listings');

    if (initState != null) {
        listings = JSON.parse(initState);
    }
    
    render(listings);

}

initialize();

// support for accounts
function addAccount() {
    var account = {
        id: uniqueId("account"),
        name: document.getElementById("login-name").value,
        email: document.getElementById("login-email").value,
        restaurant: "CompostOn"
    }

    accounts.push(account)
}

accounts = [
    {
        id: "account_0",
        name: "Samuel Lam",
        email: "samuelkinlam@gmail.com",
        restaurant: "CompostOn"
    }
]