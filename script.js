const form = document.querySelector('form');

// Display Downpayment Savings Goal
function displaySavings() {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    //Home Price stores input value without the commas
    let homePrice = form.querySelector('input[name="homePrice"]').value.replace(/,/g, '');
    //Divide by 100 to convert percent to decimal
    let percentDown = form.querySelector('input[name="percentage"]').value / 100;
    //Check if input fields are empty before calculating savings
    if (homePrice && percentDown) {
      let savings = homePrice * percentDown;
      document.body.innerHTML += `Your Down Payment Savings Goal is ${savings}`;
    } else {
      document.body.innerHTML += `Please enter valid inputs for Home Price and Percentage.`;
    }
  })
}

displaySavings();
