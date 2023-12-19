const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Simulando una operación asíncrona que toma 10 segundos
    setTimeout(() => {
        res.send("¡Hola desde Express!");
    }, 10000);
});

app.listen(3000, () => {
    console.log('El servidor está corriendo en el puerto 3000');
});

