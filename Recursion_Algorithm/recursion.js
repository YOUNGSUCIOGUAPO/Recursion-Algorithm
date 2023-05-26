function isPalindrome(word){
    //STOP condition if the word is 1 character or less
    if (word.length < 1){
        return true;
    }

    if (word[0] === word[word.length - 1]) {
            //if the first and last character are the same then remove the first and last character and test again
            return isPalindrome(word.slice(1,-1));
        }
    return false;
}


isPalindrome('kayak');