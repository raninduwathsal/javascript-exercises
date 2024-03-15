const palindromes = function (str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanStr === reversedStr;
}

// Do not edit below this line
module.exports = palindromes;
