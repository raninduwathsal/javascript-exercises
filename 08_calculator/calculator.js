const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return 0; // Return 0 if the array is empty
}
// Reduce the array to get the sum
return arr.reduce((sum, current) => sum + current);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum *  current);

};

const power = function(num1,num2) {
  // return arr.reduce((sum, current) => sum ** current);
  return num1 ** num2;
	
};

const factorial = function(num1) {
  if (num1 === 0){
    return 1;
  }
  let arr = Array.from({ length: num1 }, (_, i) => i + 1);
  return arr.reduce((sum, current) => sum *  current);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
