const array = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const result = similar(array);

function sortWord(word) {
    const chars = word.split('')
    for (let i = 0; i < chars.length; i++) {
        for (let j = i + 1; j < chars.length; j++) {
            if (chars[i] > chars[j]) {
                const temp = chars[i]
                chars[i] = chars[j]
                chars[j] = temp
            }
        }
    }
    return chars.join('')
}

function similar(arr) {
    const groupWords = {}
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i]
        const sortedWord = sortWord(word)
        if (!groupWords[sortedWord]) {
            groupWords[sortedWord] = [word]
        } else {
            groupWords[sortedWord].push(word)
        }
    }
    return Object.values(groupWords)
}

console.log(result)