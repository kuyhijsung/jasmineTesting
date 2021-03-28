window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loadInput = {
    amount: 15000,
    years: 5,
    rate: 2.5
  };
  let amountsValue = document.getElementById('loan-amount');
  amountsValue.value = loadInput.amount;
  let yearsValue = document.getElementById('loan-years');
  yearsValue.value = loadInput.years;
  let ratesValue = document.getElementById('loan-rate');
  ratesValue.value = loadInput.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(currentValues);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate / 100) / 12;
  let n = values.years * 12;
  let monthlyPay = (p * i) / (1 - Math.pow((1 + i), -n));
  return monthlyPay.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let updateMonth = document.getElementById('monthly-payment');
  updateMonth.innerText = "$" + monthly;
}