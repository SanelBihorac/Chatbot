function calculateBMI(weight, height, gender) {

    //metoda .toFixed(n) zaokružuje decimalni broj na n decimala
    let bmi = (weight / (height / 100) ** 2).toFixed(1);
    window.alert(`Your BMI is ${bmi}.`);

    if (gender === "M") {
        if (bmi < 20.7) {
            window.alert("Too low");
        } else if (bmi >= 20.7 && bmi <= 26.3) {
            window.alert("Ideal");
        } else if (bmi >= 26.4 && bmi <= 27.8) {
            window.alert("A little above normal");
        } else if (bmi >= 27.9 && bmi <= 31.2) {
            window.alert("High");
        } else if (bmi >= 31.3 && bmi < 45.3) {
            window.alert("Too high");
        } else {
            window.alert("Extremely high");
        }
    } else {
        if (bmi < 19.1) {
            window.alert("Too low");
        } else if (bmi >= 19.1 && bmi <= 25.7) {
            window.alert("Ideal");
        } else if (bmi > 25.7 && bmi <= 27.3) {
            window.alert("A little above normal");
        } else if (bmi > 27.3 && bmi <= 31.2) {
            window.alert("High");
        } else if (bmi > 31.2 && bmi <= 44.7) {
            window.alert("Too high");
        } else {
            window.alert("Extremely high");
        }
    }
}


//Chatbot:

window.alert("Hello! My name is Aid.");
window.alert("I was created in 2025.");

let name = window.prompt("What is your name? ");
window.alert(`What a great name you have, ${name}!`);

//guessing the age:
window.alert("Let me guess your age.");
window.alert("Enter remainders of dividing your age by 3, 5 and 7.")

    // taking the remainders:
let rem3 = parseInt(prompt("Enter remainder when divided by 3:"));
let rem5 = parseInt(prompt("Enter remainder when divided by 5:"));
let rem7 = parseInt(prompt("Enter remainder when divided by 7:"));

    //calculating age
let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    //printing age:
window.alert(`Your age is ${age}; that's a good time to start programming!`);

//BMI:
let doMore = true;
do {

    window.alert("Let's calculate your BMI.");
    let height = window.prompt("Enter your height in cm:");

    let weight = window.prompt("Enter your weight in kg:");
    /*
        metoda .toUpperCase() sva slova u stringu pretvara u velika slova
        metoda .toLowerCase() sva slova u stringu pretvara u mala slova
     */
    let gender = window.prompt("Enter your gender (M/F):").toUpperCase();

    while (gender !== "M" && gender !== "F") {
        gender = window.prompt("Try again:").toUpperCase();
    }

    calculateBMI(weight, height, gender);

    let userInput = window.prompt("More: (Y/N)").toUpperCase();
    if (userInput === "N") {
        doMore = false;
    }
} while (doMore);


