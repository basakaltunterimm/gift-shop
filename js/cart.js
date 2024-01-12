document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCartItems() {
        cartItemsContainer.innerHTML = "";

        cartItems.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item"); 
            cartItem.innerHTML = `
                <p>${item.product}: ${item.price} 
                    <button class="remove-item" onclick="removeCartItem(${index})">Remove</button>
                    <button class="add-more" onclick="addMore(${index})">Add More</button>
                </p>`;
            cartItemsContainer.appendChild(cartItem);
        });

        const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0);
        totalPriceElement.textContent = total.toFixed(2);
    }

    displayCartItems();

    window.removeCartItem = function (index) {
        cartItems.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        displayCartItems();
    };

    window.addMore = function (index) {
        const newItem = { ...cartItems[index] };
        cartItems.push(newItem);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        displayCartItems();
    };

    const orderButton = document.createElement("button");
    orderButton.textContent = "Place Order";
    orderButton.classList.add("order-button"); 
    orderButton.addEventListener("click", placeOrder);
    cartItemsContainer.appendChild(orderButton);

   
    function placeOrder() {
       
        alert("Your order has been placed!");
    }
});

