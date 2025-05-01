let total = 0;

let addButtons = document.querySelectorAll('.snack button');

addButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let priceText = button.previousElementSibling.textContent;
        let price = parseFloat(priceText);

        if (!isNaN(price)) {
            total += price;
            document.getElementById('total').textContent = total.toFixed(2);
        }
    });
});

document.getElementById('clear').addEventListener('click', function() {
    total = 0;
    document.getElementById('total').textContent = total.toFixed(2);
});

document.getElementById('purchase').addEventListener('click', function() {
    prompt("Please Enter your email address to confirm your purchase.");
    alert("Please check your inbox, You will recieve a bill for your purchase of " + total.toFixed(2) + " Euro shortly.");
    alert("Thank you for your purchase! Please show your e-recipt to the cashier to get your snacks!");
});
