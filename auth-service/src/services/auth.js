const { crypto } = require('../utils');
const { User } = require('../db/models');

const { getSaltHashPassword, verifyPassword, getJWTToken } = crypto;
const { UserAlreadyExistException, WrongLoginInfoException } = require('../exceptions');

async function registerService(name, email, password) {
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    throw new UserAlreadyExistException();
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

async function loginService(email, password) {
  const userObject = await User.findOne({ email });
  if (!userObject) {
    throw new WrongLoginInfoException();
  }

  const isVerified = verifyPassword(password, userObject.password);

  if (isVerified) {
    return { token: getJWTToken({ id: userObject.id, access_key: userObject.access_key }) };
  }

  throw new WrongLoginInfoException();
}

module.exports = { registerService, loginService };
