// Arrow function

const addArrow = (a: number, b: number) => a + b;
const printOutput =  (a: number | string) => console.log(a);
printOutput(addArrow(5,7))

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event));
}

// handle arrow function insede a function
function addHandle(num1:number, num2:number, cb:(num:number)=>void){
    var result = num1+num2;
    cb(result)
}

addHandle(23,67,(result)=>{
    console.log(result);
})
