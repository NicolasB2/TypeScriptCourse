class Department {

    private static instance: Department;
    private employees: string[] = [];
    static fiscalYear: 2021;

    constructor(private readonly id:string, public name: string) {
        console.log(Department.fiscalYear);
    }

    describe(this: Department){
        console.log("Department: (" + this.id) + ") name: " + this.name;
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    //Singleton
    static getInstance() {
        if(Department.instance){
            return this.instance;
        }

        this.instance = new Department('D1','D');
        return this.instance;
    }

}

class ITDepartement extends Department {

    admins: string[]

    constructor(id: string, admins: string[]){
        super(id,'Ti');
        this.admins = admins;
    }
}

class QADepartment extends Department {

    private lastReport: string;

    constructor(id: string, lastReport: string){
        super(id,'QA');
        this.lastReport = lastReport;
    }

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }else{
            throw new Error('No report found');
        }
    }

    set mostRecentReport(value: string){
        this.lastReport = value;
    }
}