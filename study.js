// Write a function that does what .reduce() does
// Generalized function that takes 3 arguments
//      an array that this function 'reduce' (to a single value)
//      an initial value 
//      a callback function that implements the reduce functionality
function reduceFunction(array, reducer, init) {
    let accum = init;
    for (const element of array) {
        accum = reducer(accum, element);
    };
    return accum;
}



// Use reduceFunction #1 - reduce the array below
// Write a reducer (callback function) that implements the reduce functionality 
// Call reduceFunction with 3 arguments 

const couponLocations = [
    { room: 'Living room', amount: 5 },
    { room: 'Kitchen', amount: 2 },
    { room: 'Bathroom', amount: 1 },
    { room: 'Master bedroom', amount: 7 }
];

function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
}

console.log(reduceFunction(couponLocations, couponCounter, 0));
//=> 15



// Use reduceFunction #2 - reduce the array below
// Write a reducer (callback function) that implements the reduce functionality 
// Call reduceFunction with 3 arguments 

const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
];

function getTotalAmount (totalPrice, product) {
    return totalPrice + product.price;
}

console.log(reduceFunction(products, getTotalAmount, 0));
//=> 33.46