/* =========================================
   SHOPPING CART
========================================= */

let cart = [];

let total = 0;


/* ADD PRODUCT */

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    total += price;

    document.getElementById("cart-count").innerText = cart.length;

    alert(productName + " added to your cart!");
}


/* SHOW CART */

function showCart() {

    const popup = document.getElementById("cartPopup");

    popup.style.display = "flex";

    displayCart();
}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cartPopup").style.display = "none";

}


/* DISPLAY CART */

function displayCart() {

    const cartItems = document.getElementById("cart-items");

    const cartTotal = document.getElementById("cart-total");


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.innerText = "₹0";

        return;
    }


    cartItems.innerHTML = "";


    cart.forEach(function(item, index) {

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name}</span>

            <span>
                ₹${item.price}

                <button
                    onclick="removeFromCart(${index})"
                    style="
                    border:none;
                    background:none;
                    color:#8b3a2e;
                    margin-left:8px;
                    cursor:pointer;
                    "
                >
                    ×
                </button>
            </span>
        `;

        cartItems.appendChild(div);

    });


    cartTotal.innerText = "₹" + total;

}


/* REMOVE PRODUCT */

function removeFromCart(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    document.getElementById("cart-count").innerText =
        cart.length;

    displayCart();

}


/* =========================================
   SEARCH
========================================= */

function showSearch() {

    const searchBox =
        document.getElementById("searchBox");

    if (searchBox.style.display === "block") {

        searchBox.style.display = "none";

    } else {

        searchBox.style.display = "block";

        document.getElementById("searchInput").focus();

    }

}


function searchProducts() {

    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const productName =
            product
                .querySelector("h3")
                .innerText
                .toLowerCase();


        if (productName.includes(searchText)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* =========================================
   CONTACT FORM
========================================= */

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been sent successfully."
    );

    event.target.reset();

}


/* =========================================
   CHECKOUT
========================================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert(
        "Thank you for shopping with Olive Brew! " +
        "Your order has been placed."
    );


    cart = [];

    total = 0;

    document.getElementById("cart-count").innerText = "0";

    displayCart();

}


/* =========================================
   CLOSE CART WHEN CLICKING OUTSIDE
========================================= */

window.addEventListener("click", function(event) {

    const popup =
        document.getElementById("cartPopup");

    if (event.target === popup) {

        closeCart();

    }

});
