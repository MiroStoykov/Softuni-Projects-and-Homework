function solve() {

    const url = `http://localhost:3030/jsonstore/collections/students`;
    const firstNameRef = document.getElementsByName("firstName")[0];
    const lastNameRef = document.getElementsByName(`lastName`)[0];
    const facultyNumberRef = document.getElementsByName(`facultyNumber`)[0];
    const gradeRef = document.getElementsByName(`grade`)[0];
    const submitBtn = document.getElementById(`submit`).addEventListener(`click`, onClick);
    const form = document.getElementById(`form`);
    const tbody = document.querySelector(`tbody`);




    async function onClick(e) {
        e.preventDefault();
        if (firstNameRef.value == `` || lastNameRef.value == `` || facultyNumberRef.value == `` || gradeRef.value == ``) {
            return;
        }
        const obj = {
            firstName: firstNameRef.value,
            lastName: lastNameRef.value,
            facultyNumber: facultyNumberRef.value,
            grade: gradeRef.value,
        }
        firstNameRef.value = ``;
        lastNameRef.value = ``;
        facultyNumberRef.value = ``;
        gradeRef.value = ``;

        await fetch(url, {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });

        const req2 = await fetch(url);
        const data = Object.values(await req2.json());
        tbody.innerHTML = ``;
        for (const i of data) {
            const tr = document.createElement(`tr`);
            for (let e = 0; e < Object.values(i).length - 1; e++) {
                const td = document.createElement(`td`);
                td.textContent = Object.values(i)[e];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }
}

solve();
