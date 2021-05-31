type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name:string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnkowEmployee = Admin | Employee;

const e1: ElevatedEmployee = {
    name: "Nico",
    privileges: ["create"],
    startDate: new Date()
};

function printEmployeeInformation(emp: UnkowEmployee) {
    console.log('name: ' + emp.name);
    if('privileges' in emp){
        console.log('privileges: ' + emp.privileges);
    }
    if('startDate' in emp){
        console.log('startDate: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);
printEmployeeInformation({name: "Ale", startDate:new Date()});