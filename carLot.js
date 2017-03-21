var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        
        inventory.push(XHR);

      });
    },
    
    getInventory: function(){
    
        return inventory
    }
    
  };

})();