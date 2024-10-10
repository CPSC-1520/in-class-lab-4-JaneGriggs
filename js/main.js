
// Enter your code below.
// STEP 1 - Adding new item to our order.

// Select the form with the calss "new-order-form"
const newOrderForm = document.querySelector('#new-order-form');

// Add an event listener on the form that will handle the "submit' event.
// Prevent default action from happening
// Assign the form elements from usingthe "elements" property on the "event.target to 
// variables with appropriate names."
newOrderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Assign the form elements from usingthe "elements" property on the "event.target to 
  // variables with appropriate names." //event.target is the form, im assigning a variable to the elements
  // targetted within the form.
  let orderName = event.target.elements["order-item-name"].value;
  let orderPrice = event.target.elements["order-item-price"].value;
  let orderSize = event.target.elements["order-size"].value;



  // Pass the form input values to the "addOrderItem" function given.
  //Create a variable named 'isFormValid' that will be assigned a Boolean. Using this variable you, either execute
  // or do not execute the "addOrderItem" with the values from the form.

  let isFormValid = false;
  console.log(isFormValid);
  if (isValueNotEmpty(orderName)) {
    isFormValid = true;
    console.log(isFormValid);
  }
  if (isFormValid == true) {
    event.target.elements["order-item-name"].classList.remove("is-invalid");

  }
  else {
    event.target.elements["order-item-name"].classList.add("is-invalid");
  }

  isFormValid = false;

  if (isValueNotEmpty(orderPrice) && isGreaterThanFive(orderPrice)) {
    isFormValid = true;
  }
  if (isFormValid == true) {
    event.target.elements["order-item-price"].classList.remove("is-invalid");

  }
  else {
    event.target.elements["order-item-price"].classList.add("is-invalid");
  }

  isFormValid = false;

  if (isValueNotEmpty(orderSize)) {
    isFormValid = true;
  }
  if (isFormValid == true) {
    event.target.elements["order-size"].classList.remove("is-invalid");

  }
  else {
    event.target.elements["order-size"].classList.add("is-invalid");
  }

  isFormValid = false;



  // Here we check the following:
  // - if orderName is NOT empty it returns 'true'
  // - AND if orderPrice is NOT empty it returns 'true'
  // - AND if orderSize is NOT empty it returns 'true'
  // - AND if orderPrice is GREATER than five it returns 'true'

  // Based on this, we set our 'isFormValid' boolean to 'true' which is meaningful because if 'isFormValid' is true, it means that all of our fields are not empty, and that our price field is greater than 5 (ie they are 'valid').

  // We must do this because if any one of the field values is 'invalid', then we don't want to add anything to the order list

  if (isValueNotEmpty(orderName) && isValueNotEmpty(orderPrice) && isValueNotEmpty(orderSize) && isGreaterThanFive(orderPrice)) {
    isFormValid = true;
  }

  if (isFormValid == true) {
    addOrderItem(orderName, orderPrice, orderSize);
    newOrderForm.reset();
  }
})

// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
    return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
    return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$' + orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}