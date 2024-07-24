class Company {

    departments = [];

    addEmployee(name, salary, position, department) {

        let input = [name, salary, position, department];

        if (Number(salary) < 0) throw new Error("Invalid input!");

        for (const i of input) {
            if (i == `` || i == null || i == undefined) {
                throw new Error("Invalid input!")
            }
        }

        let obj = {};

        obj.name = name;
        obj.salary = Number(salary);
        obj.position = position;


        let counter = false;

        if (this.departments.length > 0) {
            for (const i of this.departments) {
                let key = Object.keys(i);
                if (key[0] == department) {
                    counter = true;
                    i[department].push(obj);
                    i.salaryes += obj.salary;
                    return `New employee is hired. Name: ${name}. Position: ${position}`
                }
            }
        }

        if (!counter) {
            let obj2 = {};
            obj2[department] = [];
            obj2[department].push(obj);
            obj2.salaryes = 0;
            obj2.salaryes += obj.salary;
            this.departments.push(obj2);
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }

    bestDepartment() {
        for (const i of this.departments) {
            let entries = Object.entries(i);
            i.average = i.salaryes / entries[0][1].length;	    1
        }
        this.departments.sort((a, b) => b.average - a.average)

        let result = `Best Department is: ${Object.keys(this.departments[0])[0]}\nAverage salary: ${Object.entries(this.departments[0])[2][1].toFixed(2)}\n`
        let current = Object.entries(this.departments[0])[0][1].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        for (let i = 0; i < current.length; i++) {
            if (i == current.length - 1) {
                result += `${current[i].name} ${current[i].salary} ${current[i].position}`;
            } else {
                result += `${current[i].name} ${current[i].salary} ${current[i].position}\n`;
            }
        }
        return result;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());