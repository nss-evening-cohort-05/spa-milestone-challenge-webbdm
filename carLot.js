var CarLot = (function () {
  
    var inventory;

    function fileFailed(){
      alert("Request Timed Out");
    }

  return {

    getInventory: function(){
    
        return inventory;
    },

    loadInventory: function (callback) {

      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function getData() {
        var jData = JSON.parse(this.responseText);
        inventory = jData.cars;
        callback();
      });

      inventoryLoader.addEventListener("error", fileFailed);
      inventoryLoader.open("GET","inventory.json");
      inventoryLoader.send(); 
  
      
    }
  
  };

})();