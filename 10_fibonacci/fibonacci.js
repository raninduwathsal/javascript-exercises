const fibonacci = function(n) {
        // Convert n to integer if it's a string
        if (typeof n === 'string') {
            n = parseInt(n);
        }
    
        // Check if n is not a number or is less than 0
        if (isNaN(n) || n < 0) {
            return "OOPS"
        }
    
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }

};

// Do not edit below this line
module.exports = fibonacci;
