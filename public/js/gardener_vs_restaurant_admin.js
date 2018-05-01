function mysubmit() {
  //you can return false; here to prevent the form being submitted
  //useful if you want to validate the form

  window.location.href = document.getElementById('option-admin').value;
}

function mysubmitCart() {
	window.location.href = "checkout.html"
}

function trOnClick() {
	window.location.href = "admin_order_restaurant.html"
}