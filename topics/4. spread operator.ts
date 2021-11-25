// Spread Operator

const hobbies = ['read','draw'];
const activeHobbies = ['voley'];

activeHobbies.push(... hobbies);

const personx = {
    name:'max',
    age:30
};

const copiePerson = {... personx}

const addNumbers = (...numbers: number[]) => {
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};


console.log(addNumbers(15,4,-5));
console.log(addNumbers(5,4,3,7,6.8));

const [hobby1, hobby2, ...remainingHoobies] = hobbies;

console.log(hobbies, hobby1, hobby2);