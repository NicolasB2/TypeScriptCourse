// Simple example method 
function add(n1: number, n2: number, printResult: boolean, phrase: string){
    const result = n1+n2;
    if(printResult){
        console.log(phrase + result)
    }else{
        return result;
    }
}

const result = add(5,7.2,true,"result is: ");

// Void return
function printResult(num: number): void{
    console.log('result: '+num);
}

function addNums(num1: number, num2:number): number{
    return num1 + num2;
}

printResult(addNums(3,5));

// Example with typeof, combinable and aliases
type combinable = number | string; //combinable

function combine(input1: combinable, input2: number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combine(5,7));
console.log(combine("Nico","Ale"));

// Throw Error
function generatedError(message: string, code:number){
    throw {message:message, errorCode:code}
}

generatedError("An Error ocurred",500);