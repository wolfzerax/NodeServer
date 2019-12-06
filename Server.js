// carreguei a biblioteca do express na variavel express
var express = require("express");

//criei um servidor invocando a biblioteca
var server = express();

server.get("/Hello", function(req, res){
    res.send("Hello world")
});
server.listen(3000,inicializou());

function inicializou() {
    console.log("Server port 3000");
}