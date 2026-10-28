javascript
function placeOrder() {
    const coffee = document.getElementById("coffee");

    const coffeeName =
        coffee.options[coffee.selectedIndex].text;

    const price = coffee.value;

    document.getElementById("result").innerText =
        "Your Order: " + coffeeName +
        "\nTotal Price: ₹" + price;
}

