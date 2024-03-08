console.log("Task #2");
let str1 = prompt("First string:");
let str2 = prompt("Second string:");

let concatStr = str1 + ' ' + str2;

let concatStrLenght = concatStr.length;
let concatStrUpCase = concatStr.toUpperCase();
let concatStrLowCase = concatStr.toLowerCase();
let concatStrSubStr = concatStr.substring(0, 6);

//concatenate thhe string
let interpolStr = `${str1} and ${str2} equals to ${concatStr}.`;

//compare the string
let compareRes = (str1 === str2) ? "Strings are equal." : "Strings are not equal.";

//split
let concatStrArr = concatStr.split(' ');

//Output
console.log("Concatenated string:", concatStr);
console.log("Length:", concatStrLenght);
console.log("Uppercase:", concatStrUpCase);
console.log("Lowercase:", concatStrLowCase);
console.log("Substring of concatenated string:", concatStrSubStr);
console.log("Interpolationn:", interpolStr);
console.log("Compare string:", compareRes);
console.log("Split:", concatStrArr);