const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const passwordSalt = process.env.JWT_SALT;

function sha512(password, salt) {
  const hash = crypto.createHmac('sha512', salt);

  hash.update(password);
  const value = hash.digest('hex');

  return {
    salt,
    passwordHash: value,
  };
}

function getSaltHashPassword(password) {
  return sha512(password, passwordSalt);
}

function verifyPassword(password, hashedPassword) {
  return sha512(password, passwordSalt).passwordHash === hashedPassword;
}

function getJWTToken(payload) {
  return jwt.sign(payload, passwordSalt, { expiresIn: '2 days' });
}

module.exports = {
  passwordSalt, getSaltHashPassword, verifyPassword, getJWTToken,
};
