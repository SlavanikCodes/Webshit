let total = 0;

document.getElementById('calculate-total').onclick = function() {
    var movie = document.getElementById('movie');
    var moviePrice = movie.options[movie.selectedIndex].getAttribute('data-price');
    
    var adultTickets = document.getElementById('adults').value;
    var childrenTickets = document.getElementById('children').value;

    if (adultTickets === "") {
        adultTickets = 0;
    }
    if (childrenTickets === "") {
        childrenTickets = 0;
    }

    total = (parseInt(adultTickets) + parseInt(childrenTickets)) * parseFloat(moviePrice);

    document.getElementById('total').innerHTML = total.toFixed(2);
}

document.getElementById('purchase').addEventListener('click', function() {
    prompt("Please Enter your email address to confirm your purchase.");
    alert("Please check your inbox, You will recieve a bill for your purchase of " + total.toFixed(2) + " Euro shortly.");
    alert("Thank you for your purchase! Please show your e-recipt to the cashier to get your movie tickets!");
});