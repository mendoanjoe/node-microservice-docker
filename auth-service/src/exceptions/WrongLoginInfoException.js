class WrongLoginInfoException extends Error {
  constructor(message) {
    super(message);
    this.name = 'WrongLoginInfoException';
    this.httpStatusCode = 401;
  }
}

module.exports = WrongLoginInfoException;
