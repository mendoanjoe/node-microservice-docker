const express = require('express');

const { Auth } = require('../services');
const { AuthValidation } = require('../validations');

const { registerService, loginService } = Auth;

const authRoute = express.Router();

async function registerHandler(req, res, next) {
  const { error, value } = AuthValidation
    .register
    .validate(req.body);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
  }

  const { name, email, password } = value;

  await registerService(name, email, password)
    .then((data) => res.status(201).json({ status: true, data }))
    .catch(next);
}

async function loginHandler(req, res, next) {
  const { error, value } = AuthValidation
    .login
    .validate(req.body);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
  }

  const { email, password } = value;
  await loginService(email, password)
    .then((data) => res.status(201).json({ status: true, data }))
    .catch(next);
}

// routes
authRoute.post('/register', registerHandler);
authRoute.post('/login', loginHandler);

module.exports = authRoute;
