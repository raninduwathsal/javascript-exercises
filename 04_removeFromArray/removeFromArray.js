const removeFromArray = function(list, ...args) {
    return list.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
