function validate() {

    let input = document.getElementById(`email`);

    input.addEventListener(`change`, onChange);

    let regex = /[a-z]+@[a-z]+.[a-z]+/;

    function onChange(event) {
        let value = event.target.value;
        event.preventDefault();
        let hui = regex.exec(value);
        if (hui != null) {
            input.classList.remove("error");
        }
        if (hui == null) {
            input.classList.add("error");
            console.log(`pederas`);
        }
    }
}
