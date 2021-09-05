const jwt = require('jsonwebtoken');

const { crypto } = require('../utils');
const { UnauthorizedException } = require('../exceptions');

const { passwordSalt } = crypto;

function authMiddleware(role) {
  return (req, _res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    jwt.verify(token, passwordSalt, (err, user) => {
      if (err) {
        throw new UnauthorizedException();
      }
      req.user = user;

      if (typeof role !== 'undefined' && !user.access_key.includes(role)) {
        throw new UnauthorizedException();
      }

      return next();
    });
  };
}

module.exports = authMiddleware;
