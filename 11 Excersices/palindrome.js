const word = 'hola';

const isPalindrome = (word) => {
    for(let i = 0, j = word.length-1; i < j; i++, j--) {
        console.log(word[i], ' ', word[j]);
        if(word[i] !== word[j]) return false;
    };
    return true;
}

isPalindrome(word) ? console.log('True') : console.log('False');