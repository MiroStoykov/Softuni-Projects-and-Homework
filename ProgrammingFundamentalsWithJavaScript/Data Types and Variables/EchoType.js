function echoType(input) {
    if (typeof input === `string` || typeof input === `number`) {
        console.log(input === Number(input) ? 'number' : 'string');
        console.log(input);
    } else if (true) {
        console.log(`object`);
        console.log(`Parameter is not suitable for printing`);
    }
}

echoType(null);
