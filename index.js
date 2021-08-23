const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use .reduce() method to calculate to sum of the values of the batteryBatches array
const totalBatteries = batteryBatches.reduce(function(accumulator, element){
    return accumulator += element;
}, 0)

