console.log("Task #5");
let originalString = prompt("Enter a string to be encrypted:");

function caesarCipherEncrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) { 
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) { 
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        return char;
    }).join('');
}

function caesarCipherDecrypt(encryptedText, shift) {
    return caesarCipherEncrypt(encryptedText, 26 - shift);
}

let encryptionShift = 3;
let encryptedString = caesarCipherEncrypt(originalString, encryptionShift);

console.log("Encrypted String:", encryptedString);

let decryptionShift = encryptionShift;
let decryptedString = caesarCipherDecrypt(encryptedString, decryptionShift);

console.log("Decrypted String:", decryptedString);