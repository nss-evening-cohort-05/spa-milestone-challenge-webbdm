var CarLot = (function (oldCarLot) {
  
  oldCarLot.resetBorder = function (){

  	var card = document.getElementsByClassName("thumbnail");
  	for(j=0; j<card.length; j++){
  		card[j].classList.remove("boldBorder");
  		card[j].style.backgroundColor = ('white');
  	}
  }

  oldCarLot.changeBorders = function (clickedElemId) {

  		if(event.target.parentElement.id === clickedElemId){
  			event.target.parentElement.classList.add("boldBorder");
  		  	event.target.parentElement.style.backgroundColor = ("gray");
  			console.log(event.target.parentElement.classList);
  		}else{
  			event.target.parentElement.parentElement.classList.add("boldBorder");
  			event.target.parentElement.parentElement.style.backgroundColor = ("gray");
  			console.log(event.target.parentElement.parentElement.classList);
  		}

  		// syncInput();

 //  	{
 //  		console.log("test" + card[i]);

	// 	for(j=0; j<card.length; j++){
	// 		card[i].classList.remove("boldBorder");
	// 	}

	// 	// console.log("card was clicked", event);
	// 	// console.log(event.target.parentElement.id);
	// 	event.target.parentElement.classList.add("boldBorder");
	// 	if(event.target.parentElement.id === 0){ // caption
	// 		event.target.parentElement.classList.add("boldBorder");
	// 		console.log(event.target.parentElement.classList);
	// 	}
	// }
     
  }
  
  return oldCarLot;

})(CarLot); 