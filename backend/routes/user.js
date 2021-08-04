const express = require ('express');

const User = require('../models/user');

const router = express.Router();

router.get("/crear-cuenta", (req, res, next) =>{
    if(req.body.hasOwnProperty("btnAdoptante")){
        console.log("Adoptante");
    }
    else{
        console.log("Fundación");
    }
});

module.exports = router;