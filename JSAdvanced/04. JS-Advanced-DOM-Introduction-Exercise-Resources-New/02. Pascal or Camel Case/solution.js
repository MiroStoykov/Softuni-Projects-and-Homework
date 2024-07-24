function solve() {

  let resultStr = [];

  let text = document.getElementById(`text`).value.toLowerCase();

  let nameCase = document.getElementById(`naming-convention`).value;

  let result = document.getElementById(`result`);

  if (nameCase == `Camel Case`) {
    let arrText = text.split(` `);
    resultStr.push(arrText[0]);
    for (let i = 1; i < arrText.length; i++) {
      resultStr.push(arrText[i][0].toUpperCase() + arrText[i].substring(1));
    }
    result.innerHTML += resultStr.join(``);
  } else if (nameCase == `Pascal Case`) {
    let arrText = text.split(` `);
    for (let i = 0; i < arrText.length; i++) {
      resultStr.push(arrText[i][0].toUpperCase() + arrText[i].substring(1));
    }
    result.innerHTML += resultStr.join(``);
  } else {
    result.innerHTML += `Error!`;
  }
}

solve("this is an example", "Camel Case")
solve("secOND eXamPLE", "Pascal Case")