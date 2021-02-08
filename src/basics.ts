function add(n1: number, n2: number, printResult: boolean, phrase: string){
    const result = n1+n2;
    if(printResult){
        console.log(phrase + result)
    }else{
        return result;
    }
}

const result = add(5,7.2,true,"result is: ");
