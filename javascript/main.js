var input = document.getElementById("textInput");

function enterClear(){
  input.value = "";
}

function populatePage () {
  // Loop over the inventory and populate the page
   var inventory = CarLot.getInventory();
   var counter = 0;
   var carString = ""; 
   var carRow = "";
   carString += `<div class="container">`;
   carRow += `<div class="row">`;
    for(i=0; i<inventory.length; i++){
      
      var carCard = "";

       carCard += `<div class="col-sm-4 card">`;
       carCard +=`<div class="thumbnail" id="${i}">`;
          carCard +=`<img src="${inventory[i].url}" alt="...">`;
          carCard += `<div class="caption">`;
           carCard += `<h3>${inventory[i].year} ${inventory[i].make} ${inventory[i].model}</h3>`;
           carCard += `<p>${inventory[i].price}</p>`;
           carCard += `<p>${inventory[i].description}</p>`;
          carCard += `</div>`;
       carCard += `</div>`;
       carCard += `</div>`;
      
      carRow += carCard;
      counter += 1;  
      if(counter % 3 === 0){
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
CarLot.loadInventory(populatePage);

window.addEventListener("keyup",function(){

  var clicked = document.getElementsByClassName("boldBorder");
  var description = clicked[0].childNodes[1].childNodes[2];
  console.log(description.innerText);
  description.innerText = input.value;
  
});