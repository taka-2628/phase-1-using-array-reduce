const oneTwoThree = [1, 2, 3]


doubledAndSummed = oneTwoThree.reduce(function(accumulator, element){ 
    return element * 2 + accumulator
}, 0)

console.log(doubledAndSummed);
//=> 12


doubledAndSummedNoInit = oneTwoThree.reduce(function(accumulator, element){ 
    return element * 2 + accumulator
})

console.log(doubledAndSummedNoInit);
//=> 11

