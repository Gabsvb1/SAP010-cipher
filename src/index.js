import cipher from "./cipher.js";

console.log(cipher.encode(1, "abc"));

document.getElementById("select-code-descode").onchange = changeCodeDescode;

document.getElementById("encode-input").onchange = encode;

function encode() {
  const offSet = document.getElementById("seletor-deslocamento").value;

  const encodeInput = document.getElementById("encode-input");
  const message = encodeInput.value.replace(/s+[^a-zA-Z]+/s, "");
  encodeInput.value = message;
  const encodedMessage = cipher.encode(parseInt(offSet), message);
  const resultEncode = document.getElementById("result-encode");
  resultEncode.innerHTML = encodedMessage;
}

function descode() {
  const offSet = document.getElementById("seletor-deslocamento").value;

  const descodeInput = document.getElementById("descode-input");
  const message = descodeInput.value.replace(/s+[^a-zA-Z]+/s, "");
  descodeInput.value = message;

  const descodedMessage = cipher.decode(parseInt(offSet), message);
  const resultDescode = document.getElementById("result-descode");
  resultDescode.innerHTML = descodedMessage;
}

function changeCodeDescode() {
  const select = document.getElementById("select-code-descode").value;
  const descodificar = document.getElementById("descodificar");
  const codificar = document.getElementById("codificar");

  if (select === "descodificar") {
    descodificar.classList.remove("hiden");
    codificar.classList.add("hiden");
    document.getElementById("descode-input").onchange = descode;
  } else {
    descodificar.classList.add("hiden");
    codificar.classList.remove("hiden");
    document.getElementById("encode-input").onchange = encode;
  }
}
