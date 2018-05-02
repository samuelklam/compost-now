function addListing() {

    var listing = {
        title: document.getElementById("title").value,
        quantity: document.getElementById("quantity").value,
        weight: document.getElementById("weight").value,
        description: document.getElementById("description").value,
        instructions: document.getElementById("instructions").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value
    }

    listing.push(listing)

}

let listings = [
    {
        title: "Fruits and Veggies Scraps",
        quantity: "10",
        weight: "20 lbs",
        description: "Get your fruit and veggie scraps!",
        instructions: "Pick up at the back",
        date: "04-28-2018",
        time: "15:00"
    }
]