let word = prompt('Inserisci una parola')
word=word.toLowerCase();
console.log(isPalindrom(word));

function isPalindrom(word){
    let reversed = '';
    for(let i=0; i<word.length;i++)
    {
        let char = word.at(-i-1);
        reversed += char
    }
    if (word==reversed){
        return true
    }
    else {
        return false;
    }
}



