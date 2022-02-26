// JS for Information page

let itemID = retrieveLSData("ITEM_ID");
let itemData = data[itemID];

console.log(itemData);

document.getElementById("productName").innerHTML = itemData.name;
document.getElementById("disposalSuggestions").innerHTML = itemData.disposal;
document.getElementById("disposalLocations").innerHTML = itemData.locations;
document.getElementById("closestDisposal").innerHTML = `Closest Location: ${itemData.closest}`;

let imgString = "";
if (itemData.id.length > 1) {
    for (let i=0; i<itemData.id.length; i++) {
        imgString += `<div class="icon"><img src=\"./codeImages/${i+1}.png\"></img></div>`;
    }
} else {
    imgString = `<div class="icon"><img src=\"./codeImages/${itemData.id}.png\"></img></div>`;
};
document.getElementById("codeImg").innerHTML = imgString;