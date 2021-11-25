interface being {
    height: number;
    weight: number;
}

interface Person extends being{
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user: Person;

user = {
    height: 1.8,
    weight: 80,
    name: 'Nico',
    age: 21,
    greet(phrase: string): void{
        console.log(phrase + ' ')
    }
}

