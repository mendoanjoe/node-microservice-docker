class UserAlreadyExistException extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserAlreadyExistException';
    this.httpStatusCode = 402;
  }
}

module.exports = UserAlreadyExistException;
