var CarLot = (function (oldCarLot) {
  
  //var
  
  oldCarLot.activateEvents = function () {
    


  	input.addEventListener("keypress",function(event){
  		event.preventDefault();
  		console.log('listener');
  	});

  }
  
  return  oldCarLot;
  

})(CarLot);