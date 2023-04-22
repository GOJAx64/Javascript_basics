const word = 'tactcoa';

function isPalindromePermutation(word) {
    const characters = new Array(128).fill(0);
    let countOdd = 0;

    for(let i = 0; i < word.length; i++) {
        let code = word.charCodeAt(i);
        characters[code]++;
        if(characters[code] % 2 === 1) {
            countOdd++;
        } else {
            countOdd--;
        }
    };

    return countOdd <= 1;
}

isPalindromePermutation(word) ? console.log('True') : console.log('False');