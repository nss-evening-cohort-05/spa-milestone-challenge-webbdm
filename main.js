var input = document.getElementById("textInput");

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function enterClear() {
    input.value = "";
}

function populatePage() {
    // Loop over the inventory and populate the page
    var inventory = CarLot.getInventory();
    var counter = 0;
    var carString = "";
    var carRow = "";
    carString += `<div class="container">`;
    carRow += `<div class="row">`;
    for (i = 0; i < inventory.length; i++) {

        var carCard = `
             <div class="col-sm-4 card">
             <div class="thumbnail" id="${i}">
             <img src="${inventory[i].url}" alt="...">
             <div class="caption">
             <h3>${inventory[i].year} ${inventory[i].make} ${inventory[i].model}</h3>
             <p>${inventory[i].price}</p>
             <p class="description">${inventory[i].description}</p>
             </div>
             </div>
             </div>
        `;

        carRow += carCard;
        counter += 1;
        if (counter % 3 === 0) {
            carRow += `</div>`;
            carString += carRow;
        }
    }

    carString += `</div>`;
    carContainer.innerHTML = carString;
    //Now that the DOM is loaded, establish all the event listeners needed
    CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
ready(function() { CarLot.loadInventory(populatePage); });

window.addEventListener("keyup", function() {

    var clicked = document.getElementsByClassName("boldBorder")[0];
    var description = clicked.querySelector(".description");
    console.log(description.innerText);
    description.innerText = input.value;

});
