 var customerName = 'bob';

function upperCaseCustomerName() {
    return (customerName = customerName.toUpperCase());
}
function setBestCustomer() {
    window.bestCustomer = 'not bob';

}

function overwriteBestCustomer() {
    window.bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'jim'

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'job';
}