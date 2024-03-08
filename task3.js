console.log("Task #3");
let txt = prompt("Enter a string of text:");

let charCount = txt.length;
let wordCount = txt.split(/\s+/).filter(word => word.length > 0).length;
let txtCount = txt.split(/[.!?]/).filter(sentence => sentence.length > 0).length;

let words = txt.toLowerCase().match(/\b\w+\b/g);
let wordFreq = {};
if (words) {
    words.forEach(word => {
        wordFreq[word] = (wordFreq[word] || 0) + 1;
    });
}

let mostFreqWord = '';
let maxFreq = 0;
for (let word in wordFreq) {
    if (wordFreq[word] > maxFreq) {
        mostFreqWord = word;
        maxFreq = wordFreq[word];
    }
}

let totalWordLength = words ? words.reduce((acc, word) => acc + word.length, 0) : 0;
let averageWordLength = totalWordLength / wordCount;

console.log("Number of characters:", charCount);
console.log("Number of words:", wordCount);
console.log("Number of sentences:", txtCount);
console.log("Most frequent word:", mostFreqWord, "with", maxFreq, "occurrences");
console.log("Average word length:", averageWordLength.toFixed(2));