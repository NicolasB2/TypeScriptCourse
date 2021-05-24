// Arrow function

const addArrow = (a: number, b: number) => a + b;
const printOutput: (a: number | string) => void = output => console.log(output);
printOutput(addArrow(5,7))

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event));
}


// Spread Operator

const hobbies = ['read','draw'];
const activeHobbies = ['voley'];

activeHobbies.push(... hobbies);

const person2 = {
    name:'max',
    age:30
};

const copiePerson = {... person2}

const addNumbers = (...numbers: number[]) => {
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

console.log(addNumbers(5,4,3,7,6.8));

const [hobby1, hobby2, ...remainingHoobies] = hobbies;

console.log(hobbies, hobby1, hobby2);