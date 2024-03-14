const sumAll = function(num1,num2) {

    // Check if both inputs are integers and non-negative
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // If the first integer is greater than the second one, swap them
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }

    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
    }


// Do not edit below this line
module.exports = sumAll;
