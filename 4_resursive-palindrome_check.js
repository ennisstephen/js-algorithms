// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    if (str.length === 1 || str.length ===0 )
    {
        return true;
    }
    if (firstCharacter(str) !== lastCharacter(str)){
        return false;
    }
    
    str = middleCharacters(str);
    return isPalindrome(str);
};

