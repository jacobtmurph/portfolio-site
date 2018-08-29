const express = require("express");
const data = require("./data.json");

const app = express();

app.listen(3000);

app.set('view engine', 'pug');

