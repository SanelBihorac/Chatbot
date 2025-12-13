alert("Hello! My name is Aid.");
alert("I was created in 2025.");

let name = prompt("What is your name? ");
alert(`What a great name you have, ${name}!`);
console.log("What a great name you have, " + name + "!");

alert("Let me guess your age.");
alert("Enter remainders of dividing your age by 3, 5, and 7.");

// Taking the remainders:
let rem3 = parseInt(prompt("Enter remainder when divided by 3:"));
let rem5 = parseInt(prompt("Enter remainder when divided by 5:"));
let rem7 = parseInt(prompt("Enter remainder when divided by 7:"));

// Calculating age
let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

// Printing age:
console.log(`Your age is ${age}; that's a good time to start programming!`);
alert(`Your age is ${age}; that's a good time to start programming!`);