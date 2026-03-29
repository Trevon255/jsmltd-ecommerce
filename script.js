// <!-- Name: Trevon Fullwood -->
// <!-- ID#: 2306245 -->
// <!-- Web Programming -->
// <!-- Miss Badhika -->
// <!-- Assignment 2 -->

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
	
	let item = {
		productName: name,
		productPrice: price
};
	
	cart.push(item);
	
	localStorage.setItem("cart", JSON.stringify(cart));
	
	alert(name + " Added to Cart!")
	
	console.log(cart);
}



function displayCart() {

    let cartItemsDiv = document.getElementById("cartItems");
    let total = 0;

    if (!cartItemsDiv) return;

    cartItemsDiv.innerHTML = "";

    cart.forEach(function(item) {

        let div = document.createElement("div");

        div.innerHTML = item.productName + " - $" + item.productPrice;

        cartItemsDiv.appendChild(div);

        total += item.productPrice;
    });

    document.getElementById("total").innerHTML = "Total: $" + total;
}

function clearCart() {
		localStorage.removeItem("cart");
		location.reload();
}

displayCart();



function checkout() {
	let name = document.getElementById("name").value;
	let address = document.getElementById("address").value;
	let email = document.getElementById("email").value;
	
	if (name === "" || email === "") {
		alert("Please fill in all the fields!");
		return;
	}
	
	alert("Order was placed successfully!");
	
	localStorage.removeItem("cart");
	
	window.location.href = "index.html";
}

window.onload = displayCart;




// REGISTRATION

function register() {
	let name = document.getElementById("regName").value;
	let email = document.getElementById("regEmail").value;
	let password = document.getElementById("regPassword").value;
	
	if (name === "" || email === "" || password === "") {
		alert("Please fill in all the fields!");
		return;
	}
	
	alert("Registration was Successful!");
	
	window.location.href = "login.html";
}
	
	
	
	
	// LOGIN
	
function login() {
	let email = document.getElementById("loginEmail").value;
	let password = document.getElementById("loginPassword").value;
	
	if (email === "" || password === "") {
		alert("Please fill in all the fields!");
		return;
	}
	
	alert("Registration was Successful!");
	
	window.location.href = "login.html";
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	