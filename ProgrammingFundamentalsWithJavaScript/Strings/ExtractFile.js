function solve(str) {

    let result = str.split(`\\`);

    let fileName = result[result.length - 1].split(`.`);

    let extension = fileName.pop();

    let file = fileName.join(`.`);

    console.log(`File name: ${file}`);

    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx'
);