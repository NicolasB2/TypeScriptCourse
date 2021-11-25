enum Role  {ADMIN=0, READ_ONLY=1, WRITE_ONLY=2}; //enum

// const can not be change
const person = {
    age:20, //number
    name:"nicolas", //string
    hobbies:['sports','draw'], //array
    tuple:[2,"author"], //tuple
    role : Role.ADMIN //enum
}

console.log(person.name);

for (const hobby in person.hobbies){
    console.log(hobby.toUpperCase)
}

person.tuple = [0,'admin']

// let is a variable that can only use inside the statement
// var is a variable that can use globally 
let favoritesActivities : string[];
favoritesActivities = ['sports'];


let userInput: unknown; 
let userName: string;

userInput = 5;
userName = 'Nicolas';

//userName = userInput - not work because unknown isnt an string
//unknown is better than any because make sure to not asign wrong types
if(typeof userInput === 'string'){
    userName = userInput
}
