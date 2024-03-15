const palindromes = function (arr) {
    let letterArrayUnfiltered = charactersToList(arr);
    let letterArray = letterArrayUnfiltered.filter(ispunctuation);
    let revesedArray = letterArray.reverse();
    if (revesedArray === letterArray){
        return true;
    }
    return false;
};

function ispunctuation(text) {
    if (text === "!" || text === "," || text ==="."){
        return false;
    }
    true;
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
