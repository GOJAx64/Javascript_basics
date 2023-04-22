const word = 'helo wrd';

function wordHasUniqueCharacters(word) {
    const characters = new Array(255).fill(false);
    
    for(let i = 0; i < word.length; i++) {
        let code = word.charCodeAt(i);
        if(characters[code] === true) {
            return false;
        } else {
            characters[code] = true;
        }
    };
    return true;
}

if(wordHasUniqueCharacters(word)){
    console.log('True');
} else {
    console.log('False');
}


