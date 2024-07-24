function solve() {
    class Employee {
        name;
        age;
        salary = 0;
        tasks = [];
        counter = 0;

        constructor(name, age) {
            this.name = name;
            this.age = Number(age);
        }

        work() {
            console.log(this.tasks[this.counter]);
            this.counter++;
            if (this.counter == this.tasks.length) {
                this.counter = 0;
            }
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on a simple task.`)
        }
    }

    class Senior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on a complicated task.`)
            this.tasks.push(`${this.name} is taking time off work.`)
            this.tasks.push(`${this.name} is supervising junior workers.`)
        }
    }

    class Manager extends Employee {

        dividend = 0;

        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} scheduled a meeting.`)
            this.tasks.push(`${this.name} is preparing a quarterly report.`)
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return { Employee, Junior, Senior, Manager }
}

const classes = solve();
const junior = new classes.Junior('Ivan', 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new classes.Senior('Alex', 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new classes.Manager('Tom', 55);
manager.salary = 15000;
manager.work();
manager.work();
manager.work();
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();