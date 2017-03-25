var CarLot = (function(oldCarLot) {

    oldCarLot.resetBorder = function() {

        var card = document.getElementsByClassName("thumbnail");
        for (j = 0; j < card.length; j++) {
            card[j].classList.remove("boldBorder");
            card[j].style.backgroundColor = ('white');
        }
    }

    oldCarLot.changeBorders = function(clickedElementName) {

        if (event.target.parentElement.className === clickedElementName) {
            event.target.parentElement.classList.add("boldBorder");
            event.target.parentElement.style.backgroundColor = ("gray");
        } else {
            event.target.parentElement.parentElement.classList.add("boldBorder");
            event.target.parentElement.parentElement.style.backgroundColor = ("gray");
        }

    }

    return oldCarLot;

})(CarLot);
