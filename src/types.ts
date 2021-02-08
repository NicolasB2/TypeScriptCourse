enum Role  {ADMIN=0, READ_ONLY=1, WRITE_ONLY=2}; //enum

const person = {
    age:20, //number
    name:"nicolas", //string
    hobbies:['sports','draw'], //array
    //role:[2,"author"] //tuple
    role : Role.ADMIN //enum
}

//person.role = [0,'admin']

let favoritesActivities : string[];
favoritesActivities = ['sports'];

console.log(person.name);

for (const hobby in favoritesActivities){
    console.log(hobby)
}

let userInput: unknown; //unknow
let userName: string;

userInput = 5;
userName = 'Nicolas';

//userName = userInput;//not work because unknown isnt an string
//unknown is better than any because make sure to not asign wrong types
if(typeof userInput === 'string'){
    userName = userInput
}
