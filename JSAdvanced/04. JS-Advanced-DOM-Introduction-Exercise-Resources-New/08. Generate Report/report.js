function generateReport() {


    let employeelistener = document.getElementsByName(`employee`);
    let employee = false;
    employeelistener[0].addEventListener("change", (a) => {
        if (a.checked) { employee = true }
    })
    let deparment = document.getElementsByName(`deparment`);
    let status = document.getElementsByName(`status`);
    let dateHired = document.getElementsByName(`dateHired`);
    let benefits = document.getElementsByName(`benefits`);
    let salary = document.getElementsByName(`salary`);
    let rating = document.getElementsByName(`rating`);

    console.log(employee);
}