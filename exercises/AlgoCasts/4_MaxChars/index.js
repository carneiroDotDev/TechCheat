// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj={}
    let max = 0
    let letter = ''
     for (let st of str){
         obj[st] = obj[st]++ || 1
         letter = obj[st] > max ? st : letter
     }
    return letter
}

module.exports = maxChar;
