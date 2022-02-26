// JS for the home page

// navigation buttons
function navHome() {
    window.location = "index.html";
}

function navIdentify() {
    window.location = "id.html";
}

function navCompost() {
    window.location = "compost.html";
}

function navSus() {
    window.location = "sus.html";
}

//let userLocation = document.getElementByID("userLocation").value;

//default location setting for the purposes of this demo
let userLocation = "Monash University, Clayton";

//mock data
let data = [{
        name: "Plastic Bottle",
        disposal: "General recycling. Empty bottle and rinse bottle and cap, remove cap and squash the bottle flat. Bottle caps must be separated from the bottles and stored in a separated recyclable container (a cardboard container), to prevent the bottle caps falling through sorters and becoming litter. Donating to Envision: Melbourne-based recycling company that accepts bottle caps and uses them for the creation of prosthetics, plastic furniture and other recycled plastic goods. They will only accept bottle caps that are type 2, 4, 6 plastic recyclable.",
        locations: "Seaford, Surry hills, Bendigo, Dandenong, Thomastown, Werribee, Geelong, Ballarat",
        closest: "11 Heart Street, Dandenong VIC 3175, Australia",
        id: [2, 4, 5, 6]
    },

    {
        name: "Plastic Bag",
        disposal: "REDcycle. empty bags (bread bags, chip packets, grocery bags) that are clean of food remains can be recycled through this program. Collect bags, any soft plastic bag that you can scrunch in your fist and store them inside each other. The program recycles these soft plastics into benches, bollards and other in-store use equipment.They can be disposed at your local Coles and Woolworths (all woolworths stores, as of 2022 have RedCycle bins) store in the RedCycle bins out the front.",
        locations: "",
        closest: "2107/2125 Princes Hwy, Clayton VIC 3168",
        id: 4
    },

    {
        name: "HDPE",
        disposal: "General Recycling: All HDPE plastics (number 2 recycling plastics excluding bottle lids) can be placed in your kerbside recycling bin to be processed. Recycling plants in Victoria can repurpose the HDPE into food resin to be inserted into the food supply chain. HDPE is most used for plastic milk bottles, make sure to clean these and remove the caps before recycling.",
        locations: "",
        closest: "",
        id: 2
    }
];

// JS for Information page
function infoPage(itemID) {
    console.log("Test");
    let itemData = data[itemID];
    /*
    document.getElementById("productName").innerHTML = itemData.name;
    document.getElementById("disposalSuggestions").innerHTML = itemData.disposal;
    document.getElementById("disposalLocations").innerHTML = itemData.locations;
    document.getElementById("closestDisposal").innerHTML = `Closest Location: ${itemData.closest}`;
    */
    let imgString = "";
    for (let i in itemData.id) {
        imgString += `<div class="icon"><img src=\"./codeImages/${i+1}.png\"></img></div>`;
    }
    //document.getElementById("codeImg").innerHTML = imgString;
}

// identification nav functions
function plasticBottle() {
    window.location = "info.html";
    infoPage(0);
}

function plasticBag() {
    window.location = "info.html";
    infoPage(1);
}

function HDPE() {
    window.location = "info.html";
    infoPage(2);
}