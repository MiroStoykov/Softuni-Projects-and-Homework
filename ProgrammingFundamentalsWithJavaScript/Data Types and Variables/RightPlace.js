function rightPlace(str1, char1, str2) {

    let newStr = String(str1).replace(`_`, char1);
    console.log(newStr === str2 ? `Matched` : `Not Matched`);
}