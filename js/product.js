document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const product = document.querySelectorAll(".product-card h3")[index].textContent;
            const price = document.querySelectorAll(".product-card p")[index].textContent;

            
            const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

          
            const newItem = { product, price };
            existingCartItems.push(newItem);

            
            localStorage.setItem("cart", JSON.stringify(existingCartItems));

          
            alert(`${product} has been added to the cart!`);
        });
    });
});
