const http = require("http");
const { sum } = require("./helpers");

const server = http.createServer((req, res) => {
    res.end("hola mundo desde node js");
});

server.listen(3000);

const total = sum(10, 200);
console.log("Total: ", total);
