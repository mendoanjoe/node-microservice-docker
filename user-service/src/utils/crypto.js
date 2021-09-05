const crypto = require('crypto');

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

module.exports = {
  passwordSalt,
  getSaltHashPassword,
};
