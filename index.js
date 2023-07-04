// Instalações

const express = require("express");
const ejs = require("ejs");

const app = express();

// Configurações

app.set("view engine", "ejs");
app.use(express.static("public"));

// Componentes

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Views/index.html");

});

app.get("/eventos", (req, res) => {
    
    res.render("eventos", { eventos: listaDeEventos });
    
});


// Inicialização

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

