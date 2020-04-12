const wordSearch = (letters, word) => { 
    if (letters.length > 0 ) {
    // horizontal searching
    const horizontalJoin = letters.map(ls => ls.join(''))
    // vertical searching   
    const verticalJoin = letters[0].map((x, i) => letters.map(x => x[i]).join(''))
    // console.log(verticalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) 
        return true
    }
    for (l of verticalJoin) {
        if (l.includes(word)) 
        return true
    }
    return false
    } 
    return undefined
}

module.exports = wordSearch;
// console.log(wordSearch([], "john"));