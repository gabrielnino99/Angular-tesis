const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require ("./routes/user");

const Adoptante = require('./models/adoptante');
//Initilizations
const app = express();
const url = "mongodb+srv://gabokid:bg1CbQvQEvqavI4w@cluster0.igejl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Conectado a la BD");
})
.catch(()=>{
    console.log("Conexión fallida");
});



//Settings

//Middlewares
app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});
//Global variables

//Routes

app.get('/', (req, res) => {
    res.send({});
    console.log("Funciona");
});

app.get('/login', (req, res) => {
    res.send([1,2,3]);
    console.log("Dentro de login")
});


//Static Files

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.use("/api/user", userRoutes);






module.exports = app;