var CarLot = (function(oldCarLot) {

    function cardListener(event) {
        var card = document.getElementsByClassName("thumbnail");

        for (i = 0; i < card.length; i++) { // Use array.map instead of "for loops" on future versions

            eName = card[i].className;
            (function(eName) {

                card[i].addEventListener("click", oldCarLot.resetBorder);
                card[i].addEventListener("click", enterClear);
                card[i].addEventListener("click", function() {
                    oldCarLot.changeBorders(eName);
                    input.focus();
                });

            })(eName); /// Preserves each index's unique id/names 
                       /// by locking it into this function each time
        }
    }

    oldCarLot.activateEvents = function() {
        cardListener();
        input.addEventListener("keypress", function(event) {});
    }

    return oldCarLot;


})(CarLot);
