function login(password) {
    let username = password[0];
    let pass = username.split(``).reverse().join(``);
    let counter = 1;
    for (let i = 1; i < password.length; i++) {
        if (password[i] == pass) {
            console.log(`User ${password[0]} logged in.`);
            return;
        }

        if (counter == 4) {
            console.log(`User ${password[0]} blocked!`);
            return;
        }

        if (password[i] != pass && counter < 4) {
            console.log(`Incorrect password. Try again.`);
        }
        counter++;
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);