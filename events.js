var CarLot = (function (oldCarLot) {
  
	  function cardListener(event){
	    var card = document.getElementsByClassName("thumbnail");
	    console.log("testing cardListener", card);

	    for(i=0; i<card.length; i++){

	    	card[i].addEventListener("click", oldCarLot.resetBorder);

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
