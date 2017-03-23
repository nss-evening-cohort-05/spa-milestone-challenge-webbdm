var CarLot = (function (oldCarLot) {
  
	  function cardListener(event){
	    var card = document.getElementsByClassName("thumbnail");
	    console.log("testing cardListener", card);

	    for(i=0; i<card.length; i++){

	    	card[i].classList.remove("boldBorder");
	    	card[i].addEventListener("click", function(event){
	    		//for(j=0; j<card.length; j++)

	    		// console.log("card was clicked", event);
	    		// console.log(event.target.parentElement.id);
	    		event.target.parentElement.classList.add("boldBorder");
	    		if(event.target.parentElement.id === 0){ // caption
	    			event.target.parentElement.classList.add("boldBorder");
	    			console.log(event.target.parentElement.classList);
	    		}

	    	});

	    }

	  }
  
  oldCarLot.activateEvents = function() {
    
  	cardListener();

  	input.addEventListener("keypress",function(event){
  		event.preventDefault();
  		console.log('listener');
  	});

  }
  
  return  oldCarLot;
  

})(CarLot);
