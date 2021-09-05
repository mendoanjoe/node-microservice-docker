const express = require('express');

const { User } = require('../services');
const { UserValidation } = require('../validations');
const authMiddleware = require('../middlewares');

const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  paginationUser,
} = User;

const userRoute = express.Router();

async function createHandler(req, res, next) {
  const { error, value } = UserValidation
    .create
    .validate(req.body);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
  }

  const { name, email, password } = value;

  await createUser(name, email, password)
    .then((data) => res.status(201).json({ status: true, data }))
    .catch(next);
}

async function readHandler(req, res, next) {
  const { error, value } = UserValidation
    .readById
    .validate(req.params);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
  }

  const { id } = value;

  await readUser(id)
    .then((data) => res.status(201).json({ status: true, data }))
    .catch(next);
}

async function updateHandler(req, res, next) {
  const { error, value } = UserValidation
    .updateById
    .validate({ body: req.body, params: req.params });

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
  }

  const { body, params } = value;

  await updateUser(params.id, body)
    .then(() => res.status(201).json({ status: true, data: null }))
    .catch(next);
}

async function deleteHandler(req, res, next) {
  const { error, value } = UserValidation
    .deleteById
    .validate(req.params);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
  }

  const { id } = value;

  await deleteUser(id)
    .then(() => res.status(201).json({ status: true, data: null }))
    .catch(next);
}

async function paginationHandler(req, res, next) {
  const { error, value } = UserValidation
    .pagination
    .validate(req.body);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
  }

  const { page, each_page: eachPage } = value;

  await paginationUser(page, eachPage)
    .then((data) => res.status(201).json({ status: true, data }))
    .catch(next);
}

async function meHandler(req, res, next) {
  const { id } = req.user;

  await readUser(id)
    .then((data) => res.status(201).json({ status: true, data }))
    .catch(next);
}

// routes
userRoute.post('/', authMiddleware('admin'), createHandler);
userRoute.get('/', authMiddleware('admin'), paginationHandler);
userRoute.get('/:id', authMiddleware('admin'), readHandler);
userRoute.put('/:id', authMiddleware('admin'), updateHandler);
userRoute.delete('/:id', authMiddleware('admin'), deleteHandler);
userRoute.get('/:id/me', authMiddleware(), meHandler);

module.exports = userRoute;
