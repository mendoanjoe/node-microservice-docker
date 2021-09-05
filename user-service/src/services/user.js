const { crypto } = require('../utils');
const { User } = require('../db/models');

const { getSaltHashPassword } = crypto;
const { UserNotFoundException } = require('../exceptions');

async function createUser(name, email, password) {
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    throw new UserNotFoundException();
  }

  const passObject = getSaltHashPassword(password);
  const userObject = await User.create({
    name,
    email,
    password: passObject.passwordHash,
  });

  return {
    id: userObject.id,
    name: userObject.name,
    email: userObject.email,
  };
}

async function readUser(id) {
  const checkUser = await User.findOne({ _id: id });
  if (!checkUser) {
    throw new UserNotFoundException();
  }

  return {
    id: checkUser.id,
    name: checkUser.name,
    email: checkUser.email,
  };
}

async function updateUser(id, data) {
  const checkUser = await User.findOne({ _id: id });
  if (!checkUser) {
    throw new UserNotFoundException();
  }

  const userObject = await User.updateOne({ _id: id }, data);

  return userObject;
}

async function deleteUser(id) {
  const checkUser = await User.findOne({ _id: id });
  if (!checkUser) {
    throw new UserNotFoundException();
  }

  const userObject = await User.deleteOne({ _id: id });

  return userObject;
}

async function paginationUser(page = 1, eachPage) {
  const userObject = await User.find({}).limit(eachPage).skip(page === 1 ? 0 : page * eachPage);
  return userObject;
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  paginationUser,
};
