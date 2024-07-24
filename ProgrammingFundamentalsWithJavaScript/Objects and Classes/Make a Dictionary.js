function solve(arr) {
    let dictionary = [];

    for (const i of arr) {

        let counter = false;

        let parcedObj = JSON.parse(i);

        let key = Object.keys(parcedObj);
        let value = Object.values(parcedObj);
        let obj = { term: key[0], definition: value[0] };


        for (const i of dictionary) {
            if (i.term == key) {
                counter = true;
                i.definition = value;
            }
        }
        if (!counter) {
            dictionary.push(obj);
        }
    }


    let sortedDictionary = dictionary.sort((a, b) => a.term.localeCompare(b.term));
    for (const i of sortedDictionary) {
        console.log(`Term: ${i.term} => Definition: ${i.definition}`);
    }

}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])