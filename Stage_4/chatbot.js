//prompt-sync je javno dostupan npm paket koji radi lokalno i omogućava sinkroni unos, slično kao sync-input
const prompt = require('prompt-sync')();

function calculateBMI(weight, height, gender) {

    //metoda .toFixed(n) zaokružuje decimalni broj na n decimala
    let bmi = (weight / (height / 100) ** 2).toFixed(1);
    console.log(`Your BMI is ${bmi}.`);

    if (gender === "M") {
        if (bmi < 20.7) {
            console.log("Too low");
        } else if (bmi >= 20.7 && bmi <= 26.3) {
            console.log("Ideal");
        } else if (bmi >= 26.4 && bmi <= 27.8) {
            console.log("A little above normal");
        } else if (bmi >= 27.9 && bmi <= 31.2) {
            console.log("High");
        } else if (bmi >= 31.3 && bmi < 45.3) {
            console.log("Too high");
        } else {
            console.log("Extremely high");
        }
    } else {
        if (bmi < 19.1) {
            console.log("Too low");
        } else if (bmi >= 19.1 && bmi <= 25.7) {
            console.log("Ideal");
        } else if (bmi > 25.7 && bmi <= 27.3) {
            console.log("A little above normal");
        } else if (bmi > 27.3 && bmi <= 31.2) {
            console.log("High");
        } else if (bmi > 31.2 && bmi <= 44.7) {
            console.log("Too high");
        } else {
            console.log("Extremely high");
        }
    }
}


//Chatbot:

console.log("Hello! My name is Aid.");
console.log("I was created in 2025.");

let name = prompt("What is your name? ");
console.log(`What a great name you have, ${name}!`);

//guessing the age:
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.")

    // taking the remainders:
let rem3 = prompt();
let rem5 = prompt();
let rem7 = prompt();

    //calculating age
let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    //printing age:
console.log(`Your age is ${age}; that's a good time to start programming!`);

//BMI:
let doMore = true;
do {

    console.log("Let's calculate your BMI.");
    console.log("Enter your height in cm:");
    let height = prompt();

    console.log("Enter your weight in kg:");
    let weight = prompt();

    console.log("Enter your gender (M/F):");
    /*
        metoda .toUpperCase() sva slova u stringu pretvara u velika slova
        metoda .toLowerCase() sva slova u stringu pretvara u mala slova
     */
    let gender = prompt().toUpperCase();

    while (gender !== "M" && gender !== "F") {
        console.log("Try again:");
        gender = prompt().toUpperCase();
    }

    calculateBMI(weight, height, gender);

    console.log("More: (Y/N)");

    let userInput = prompt().toUpperCase();
    if (userInput === "N") {
        doMore = false;
    }
} while (doMore);


