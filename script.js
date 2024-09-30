function changeImage(imageUrl) {
    document.getElementById('mainImage').src = imageUrl;
}

document.getElementById('addToCart').addEventListener('click', function () {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} person(s) of vehicle ${size} to cart.`);
});
function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

document.getElementById('booknow').addEventListener('click', function() {
    // Base price for the product
    let basePrice = 0;

    // Get selected size
    let size = document.getElementById('size').value;

    // Get quantity
    // let quantity = parseInt(document.getElementById('quantity').value);

    // Get the price of the personal guide if selected
    let personalGuide = document.getElementById('personalGuide').checked ? 50 : 0;

    // Get the number of extra days
    let extraDays = parseInt(document.getElementById('extraDays').value) || 0;
    let extraDaysCost = extraDays * 20;

    // Calculate total price
    let totalPrice = (basePrice + personalGuide + extraDaysCost) * quantity;

    // Store booking information in localStorage
    localStorage.setItem('productName', "Men's Fashion T Shirt");
    localStorage.setItem('price', basePrice);
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('size', size);
    localStorage.setItem('personalGuide', personalGuide ? 'Yes' : 'No');
    localStorage.setItem('extraDays', extraDays);
    localStorage.setItem('totalPrice', totalPrice);

    // Redirect to booking page
    window.location.href = 'booking.html';
});
