// yaha par express ka code likhengge
//is file m hum middlewares use karte hai aur packages ko require karte h aur error handling bhi kartehai yaha
//route yaha nhi bante
//aur controller aur routes ek folder m nhi hote hai 
//isme routes aur middlewares setup hote hai define nnhii 


const express = require("express");
const app = express();
const indexRoutes = require('./routes/index.routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes)

module.exports = app;
