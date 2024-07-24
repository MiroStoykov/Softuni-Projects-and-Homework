function toggle() {

    let button = document.getElementsByClassName(`button`);

    let buttonText = button[0].innerHTML.toUpperCase();

    let text = document.getElementById(`extra`);

    if (buttonText == `MORE`) {
        button[0].innerHTML = `Less`;
        text.style.display = "block";
    } else {
        button[0].innerHTML = `More`;
        text.style.display = "none";
    }
}