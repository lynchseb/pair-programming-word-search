const wordSearch = (letters, word) => { 
    if(letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(horizontalJoin)
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalArray = letters[0].map((column, ls) => letters.map(row => row[ls]))
    const verticalJoin = verticalArray.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word))
        return true
    }
    // console.log(verticalArray, verticalJoin)
    return false;
}

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')

module.exports = wordSearch