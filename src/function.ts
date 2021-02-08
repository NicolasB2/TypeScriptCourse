type combinable = number | string; //combinable
type User = { name: string; age: number }; //aliases

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

function addHandle(num1:number, num2:number, cb:(num:number)=>void){
    var result = num1+num2;
    cb(result)
}

addHandle(23,67,(result)=>{
    console.log(result);
})