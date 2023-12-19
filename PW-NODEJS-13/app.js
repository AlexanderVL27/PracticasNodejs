const fs = require('fs');
const fileName = "target.txt";

const errHandler = err => console.log(err);

function contarPalabras(texto) {
    const palabras = texto.split(' ');
    return palabras.length;
}

fs.readFile(fileName, (err, data) => {
    if (err) {
        errHandler(err);
        return;
    }

    const contenido = data.toString();
    console.log(contenido);

    const numeroPalabras = contarPalabras(contenido);
    console.log(`Número de palabras: ${numeroPalabras}`);
});

console.log("Programación asíncrona en Node.js");
