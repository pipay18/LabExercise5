console.log("Task #4");
let pass = prompt("Enter your password:");

let lenghtFdBack = '';
if (pass.length >= 8) {
    lenghtFdBack = 'Length requirement: Passed';
} else {
    lenghtFdBack = 'Length requirement: Failed (Password must be at least 8 characters long)';
}


let upcaseRegex = /[A-Z]/;
let lowcaseRegex = /[a-z]/;
let numRegex = /[0-9]/;
let specialCharRegex = /[^A-Za-z0-9]/;

let upcasePresent = upcaseRegex.test(pass);
let lowercasePresent = lowcaseRegex.test(pass);
let numPresent = numRegex.test(pass);
let specialCharPresent = specialCharRegex.test(pass);

let strengthRating = '';
if (pass.length >= 12 && upcasePresent && lowercasePresent && numPresent && specialCharPresent) {
    strengthRating = 'Strong';
} else if ((pass.length >= 8 && pass.length < 12) && ((upcasePresent && lowercasePresent && numPresent) || (upcasePresent && lowercasePresent && specialCharPresent) || (lowercasePresent && numPresent && specialCharPresent))) {
    strengthRating = 'Moderate';
} else {
    strengthRating = 'Weak';
}

// output
console.log("Password Strength:", strengthRating);
console.log("Feedback:", lenghtFdBack);
console.log("Uppercase Letters:", upcasePresent);
console.log("Lowercase Letters:", lowercasePresent);
console.log("Numbers:", numPresent);
console.log("Special Characters:", specialCharPresent);