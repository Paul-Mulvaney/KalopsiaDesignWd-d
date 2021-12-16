(function () {
    // add a listener for add to cart if such a button id is pressed
    document.getElementById('pdetails').addEventListener("submit", function (event) {

        // wait for Buy Now utton on checkout page to be clicked
        event.preventDefault();
        var card = document.getElementById('getCardName').value;
        var cardnumber = document.getElementById('getCardNumber').value;
        var cvc = document.getElementById('getCardCvcNumber').value;
        if (card == "walter mitty" && cardnumber == "1234 5678 8765 4321" && cvc == "123") {
            // successful payment, user shown confirmation screen  
            localStorage.setItem('checkout', 0);
            var element = document.getElementById("payment-success");
            element.classList.remove("d-none");
            localStorage.setItem('checkout', 0);
        }
        else {
            // payment unsuccessful, error message appears
            var element = document.getElementById("payment-failure");
            element.classList.remove("d-none");
            // element.classList.remove("d-block");
        }
    });
}())