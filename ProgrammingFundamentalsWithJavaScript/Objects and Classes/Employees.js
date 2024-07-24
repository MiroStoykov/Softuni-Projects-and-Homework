function solve(arr) {

    let employees = {};

    for (const emplyee of arr) {

        employees.name = emplyee;
        employees.personalNum = emplyee.length;

        console.log(`Name: ${employees.name} -- Personal Number: ${employees.personalNum}`);

    }


}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)