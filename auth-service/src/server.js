const express = require('express');

const Router = require('./routes');
const Database = require('./db');
const { error: ErrorHandler } = require('./utils');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

// initializer
Database.init();

app.use('/auth', Router.Auth);
app.use(ErrorHandler);

app.listen(process.env.AUTH_SERVICE_PORT, () => {
  console.log(`Server is running at port ${process.env.USER_SERVICE_PORT}`);
});
