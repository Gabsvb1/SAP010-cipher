const cipher = {
  encode: function encode(offset, string) {
    const resultado = [];
    const upperString = string.toUpperCase();

    for (let index = 0; index < upperString.length; index++) {
      const charcode = upperString.charCodeAt(index);

      if (upperString[index] === " ") {
        resultado.push(upperString[index]);
      } else {
        resultado.push(
          String.fromCharCode(((charcode - 65 + offset) % 26) + 65)
        );
      }
    }

    return resultado.join("");
  },
  decode: function decode(offset, string) {
    const resultado = [];
    const upperString = string.toUpperCase();

    for (let index = 0; index < upperString.length; index++) {
      const charcode = upperString.charCodeAt(index);

      if (upperString[index] === " ") {
        resultado.push(upperString[index]);
      } else {
        resultado.push(
          String.fromCharCode((charcode + 65 - offset) % 26 + 65)
        );
      }
    }

    return resultado.join("");
  },
  // ...
};

export default cipher;
