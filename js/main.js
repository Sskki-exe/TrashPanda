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
        locations: "N/A",
        closest: "2107/2125 Princes Hwy, Clayton VIC 3168",
        id: 4
    },

    {
        name: "HDPE",
        disposal: "General Recycling: All HDPE plastics (number 2 recycling plastics excluding bottle lids) can be placed in your kerbside recycling bin to be processed. Recycling plants in Victoria can repurpose the HDPE into food resin to be inserted into the food supply chain. HDPE is most used for plastic milk bottles, make sure to clean these and remove the caps before recycling.",
        locations: "N/A",
        closest: "N/A",
        id: 2
    }
];
updateLSData("DATA", data);

// identification nav functions
function plasticBottle() {
    updateLSData("ITEM_ID", 0);
    window.location = "info.html";
}

function plasticBag() {
    updateLSData("ITEM_ID", 1);
    window.location = "info.html";
}

function HDPE() {
    updateLSData("ITEM_ID", 2);
    window.location = "info.html";
}

// local storage functions
 function retrieveLSData(key)
 {
     let data = localStorage.getItem(key);
     try
     {
         data = JSON.parse(data);
     }
     catch(err){}
     finally
     {
         return data;
     }
 }

 function updateLSData(key, data)
 {
     let json = JSON.stringify(data);
     localStorage.setItem(key, json);
 }