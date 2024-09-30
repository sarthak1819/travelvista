// Retrieve booking details from localStorage and display them
document.addEventListener('DOMContentLoaded', function() {
    // Get stored data
    let productName = localStorage.getItem('productName');
    let price = localStorage.getItem('price');
    let quantity = localStorage.getItem('quantity');
    let size = localStorage.getItem('size');
    let personalGuide = localStorage.getItem('personalGuide');
    let extraDays = localStorage.getItem('extraDays');
    let totalPrice = localStorage.getItem('totalPrice');

    // Display the data in the respective elements
    document.getElementById('productName').textContent = productName;
    document.getElementById('price').textContent = price;
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('size').textContent = size;
    document.getElementById('personalGuide').textContent = personalGuide;
    document.getElementById('extraDays').textContent = extraDays;
    document.getElementById('totalPrice').textContent = totalPrice;
});
