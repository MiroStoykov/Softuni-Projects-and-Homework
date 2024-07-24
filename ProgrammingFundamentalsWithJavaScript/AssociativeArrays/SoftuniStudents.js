function solve(input) {

    let courses = [];

    for (const i of input) {
        let current = i.split(` `);
        if (current.length == 2) {
            let a = current[0].split(`:`);
            let course = a[0];
            let capacity = Number(current[1]);
            let counter = false;
            for (const j of courses) {
                if (courses.length > 0 && j.course == course) {
                    j.capacity += capacity;
                    counter = true;
                }
            }
            if (!counter) {
                let obj = {};
                obj.course = course;
                obj.capacity = capacity;
                obj.students = [];
                obj.studentsCount = 0;
                courses.push(obj);
            }
        } else {
            let a = current[0].split(/[\[\]]/);
            let student = a[0];
            let credits = Number(a[1]);
            let email = current[3];
            let course = current[5];

            for (const j of courses) {
                if (j.course == course) {
                    if (j.capacity > 0) {
                        let arr = [student, credits, email];
                        j.students.push(arr);
                        j.students.sort((a, b) => b[1] - a[1]);
                        j.capacity--;
                        j.studentsCount++;
                    }
                }
            }
        }

    }

    courses.sort((a, b) => b.studentsCount - a.studentsCount);

    courses.forEach(a => {
        console.log(`${a.course}: ${a.capacity} places left`);
        a.students.forEach(e => {
            console.log(`--- ${e[1]}: ${e[0]}, ${e[2]}`);
        })
    })
}


solve(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'])