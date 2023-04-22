const word_1 = 'god';
const word_2 = 'doggy';

function arePermutation(w1, w2) {
    if(w1.length !== w2.length) return false;

    const charactersCount = new Array(128).fill(0);

    for(let i = 0; i < w1.length; i++) {
        let code = w1.charCodeAt(i);
        charactersCount[code]++;
    }

    for(let i = 0; i < w2.length; i++) {
        let code = w2.charCodeAt(i);
        charactersCount[code]--;
        if(charactersCount[code] < 0) return false;
    }

    return true;
}


if(arePermutation(word_1, word_2)){
    console.log('True');
} else {
    console.log('False');
}