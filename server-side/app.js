const express = require('express');
const router = require('./routes');
const app = express();
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(errorHandler);

module.exports = app;
