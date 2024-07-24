function solve() {
  let input = document.getElementById(`input`).value;
  let output = document.getElementById(`output`);

  let sentences = input.split(".");

  let counter = [];

  if (sentences[sentences.length - 1] == "") {
    sentences.pop();
  }

  for (let i = 0; i < sentences.length; i++) {

    counter.push(sentences[i]);

    let counter2 = sentences.length % 3;

    if (counter.length == 3) {
      let p = document.createElement("p");
      let text = counter.join(".") + ".";
      p.innerHTML += text;
      output.appendChild(p);
      counter = [];
    }

    if (counter2 > 0 && i == sentences.length - 1) {
      if (counter.length == 1) {
        let p = document.createElement("p");
        let text = counter[0] + ".";
        p.innerHTML += text;
        output.appendChild(p);
      } else {
        let p = document.createElement("p");
        let text = counter.join(".") + ".";
        p.innerHTML += text;
        output.appendChild(p);
      }
    }
  }
}