const palindromes = function (arr) {
    let filtered = arr.filter(notpunctuation);
    let letterArray = charactersToList(filtered);



};

function notpunctuation(text) {
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    return !punctuationRegex.test(text);
};

function charactersToList(str) {
    // Initialize an empty list to store characters
    var charList = [];

    // Iterate over each character in the string
    for (var i = 0; i < str.length; i++) {
        // Check if the character is not a space
        if (str[i] !== ' ') {
            // Add the character to the list
            charList.push(str[i]);
        }
    }

    // Return the list of characters
    return charList;
}

// Do not edit below this line
module.exports = palindromes;
