interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user: Person;

user = {
    name: 'Nico',
    age: 21,
    greet(phrase: string): void{
        console.log(phrase + ' ')
    }
}

