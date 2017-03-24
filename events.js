var CarLot = (function(oldCarLot) {

    function cardListener(event) {
        var cards = [...document.getElementsByClassName("thumbnail")];
        //console.log("testing cardListener");

        cards.map(function(card) {

            card.addEventListener("click", function() {
                window.enterClear();
                input.focus();
                oldCarLot.resetBorder();
                oldCarLot.changeBorders(card.id);
            });
        });

    }

    oldCarLot.activateEvents = function() {

        cardListener();
        input.addEventListener("keypress", function(event) {
            //console.log('sets text value');
        });

    }

    return oldCarLot;


})(CarLot);
