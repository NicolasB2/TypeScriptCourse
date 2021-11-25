function mergeGenerics<T, U>(objA: T, objB: U) {
    return Object.assign(objA,objB);
}

const mergeObject = mergeGenerics({name:'Nico'}, {age:'21'});
console.log(mergeObject)

const mergeObject2 = mergeGenerics<string, number>("text",16);
console.log(mergeObject)


interface lengthy {
    length:number
}

function countAndDescribe<T extends lengthy>(element: T) : [T,string]{
    let descriptionText =  "Got no value.";

    if(element.length === 1){
        descriptionText = "Got one element"
    }else if(element.length > 1){
        descriptionText = "Got " + element.length + " elements." ;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe("count and describe"));
console.log(countAndDescribe(["count","and","describe"]));

function extractAndConvert<T extends object, K extends keyof T>(obj:T, key:K) {
    return 'value: ' + obj[key];
}

console.log(extractAndConvert({ name:'Nico' }, 'name'));