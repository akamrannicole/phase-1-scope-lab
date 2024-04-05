//write your code here
// Declare customerName in the global scope and set it to 'bob'
var customerName = 'bob';

// Implement upperCaseCustomerName to modify customerName to its uppercase version
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Implement setBestCustomer to set the value of bestCustomer to 'not bob' in the global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Implement overwriteBestCustomer to modify the value of bestCustomer to 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Implement changeLeastFavoriteCustomer to modify the value of leastFavoriteCustomer to 'definitely not bob'
const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  throw new Error("Assignment to constant variable.");
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  bestCustomer,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};


