function Required(target: any, propName:string) {
    console.log("====> decorator1 " + target.constructor.name + " - " + propName);
}

function PositiveNumber(target: any, propName:string) {
    console.log("====> decorator1 " + target.constructor.name + " - " + propName);
}

class Course {
    @Required
    title: string;

    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        console.log("====> Constructor " + t + " - " + p);
        this.title = t;
        this.price = p;
    }
}

let curse1 = new Course("math",123341)