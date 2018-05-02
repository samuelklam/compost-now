let compostListings = [
    createCompostListing("Fruits and Veggies Scraps", "Fruits, Vegetables", "20 Lbs", "images/compost_listings/fruits_and_veggies_scraps.jpg", "compost_listings/fruits_and_veggies.html"),
    createCompostListing("Egg Shells", "Other", "5 Lbs", "images/compost_listings/egg_shells.jpg", "compost_listings/fruits_and_veggies.html"),
    createCompostListing("Pasta", "Grains", "12 Lbs", "images/compost_listings/pasta.jpg", "compost_listings/fruits_and_veggies.html")
];

/**
    Suite of functions to render compost listings on different pages
*/

// admin_products.html
const renderHTMLListingsRestaurantAdminProductsPage = (listing) => {
    `<tr class="item-editable">
        <td>
            <div class="media">
                <div class="media-left media-middle">
                    <img src="${listing.imageUrl}" alt="...">
                </div>
                <div class="media-body media-middle">
                    <h5>
                        <a href="admin_product.html">Fruits</a>
                    </h5>
                </div>
            </div>
        </td>
        <td class="media-middle">
            <strong>
                ${listing.title}
            </strong>
        </td>
        <td class="media-middle">
            ${listing.weight}
        </td>
        <td class="media-middle">
            ${listing.categories}
        </td>                                           
        <td class="media-middle">
            <time datetime="${listing.date}" class="entry-date">08.02.2017 at 20:25</time>
        </td>
    </tr>`
}

const renderListingsRestaurantAdminProductsPage = (listings) => {
    // get the posts element

    let listingsElm = document.querySelector('.RestaurantAdminProductsPage');
    console.log("Listings elem here", listingsElm);

    // render postits inside listingsElm
    console.log("here are the listings", compostListings);
    listingsElm.innerHTML = compostListings.map(p => {
        renderHTMLListingsRestaurantAdminProductsPage(p)
        console.log(p);
    }).join('');

    // let deletePostitElms = document.querySelectorAll('.delete-postit');

    // deletePostitElms.forEach(el => el.addEventListener('click', function() {
    //     let postitId = this.parentNode.parentNode.parentNode.getAttribute('data-postit-id');
    //     deletePostit(postits, postitId);
    // }));
};

const renderCompostListings = (postits) => {
    // get the posts element
    let postitsElm = document.querySelector('.postits');

    // render postits inside postitsElm
    postitsElm.innerHTML = postits.map(p => renderPostit(p)).join('');

    let deletePostitElms = document.querySelectorAll('.delete-postit');

    deletePostitElms.forEach(el => el.addEventListener('click', function() {
        let postitId = this.parentNode.parentNode.parentNode.getAttribute('data-postit-id');
        deletePostit(postits, postitId);
    }));
};

const renderCompostListing = (listing) => {
    return `<div class="postit" data-postit-id=${postit.uniqueId}>
        <li style="color:${postit.color}">
            <div class="postit-animation">
                <h2>${postit.title}</h2>
                <p>${postit.content}</p>
                <div class="delete-postit">
                    <img src="./img/delete-postit.png">
                    CLICK TO DELETE
                </div>
            </div>
        </li>
    </div>`;
};

/**
 * Constructor to create a new compost listing
 */
function createCompostListing(title, categories, weight, imageUrl, pageUrl, status = "Awaiting Pickup", date = new Date(), id = uniqueId()) {
    return {
        uniqueId: id,
        title: title,
        categories: categories,
        weight: weight,
        imageUrl: imageUrl,
        pageUrl: pageUrl,
        date: date,
        status: status,
    };
};

/**
 * Add a postit on the board
 */
function addPostit(postits, postit) {
    postits.push(postit);
    localStorage.setItem('postits', JSON.stringify(postits));
    renderPostits(postits);
}

function deletePostit(postits, postitId) {
    postits = postits.filter(p => p.uniqueId !== postitId);
    localStorage.setItem('postits', JSON.stringify(postits));
    renderPostits(postits);
}

function initCreatePostitButton() {
    let newPostit = document.querySelector('button')
    newPostit.addEventListener("click", function(e) {
        let localState = localStorage.getItem('postits');
        postits = (postits === null) ? [] : JSON.parse(localState);

        let title = prompt("Please enter a title for the postit");
        let content = prompt("Please enter the content for the postit");
        let newPostit = createPostit(title, content);

        addPostit(postits, newPostit);
    });
}

const initialize = () => {
    // let initState = localStorage.getItem('postits');
    // if (initState != null) {
    //     // JSON: 
    //     postits = JSON.parse(initState); 
    // }
    // renderPostits(postits);
    // initCreatePostitButton();

    renderListingsRestaurantAdminProductsPage()
};

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

initialize();
