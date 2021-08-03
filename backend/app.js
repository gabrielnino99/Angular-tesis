const express = require('express');
const mongoose = require('mongoose');


const Adoptante = require('./models/adoptante');
//Initilizations
const app = express();

//Settings

//Middlewares

//Global variables

//Routes

//Static Files

app.use(express.json());
app.use(express.urlencoded({extended: false}));


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

app.get('/', (req, res) => {
    res.send({});
    console.log("Funciona");
});

app.get('/login', (req, res) => {
    res.send([1,2,3]);
    console.log("Dentro de login")
});

module.exports = app;