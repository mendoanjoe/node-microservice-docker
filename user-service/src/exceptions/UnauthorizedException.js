class UnauthorizedException extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedException';
    this.httpStatusCode = 401;
  }
}

module.exports = UnauthorizedException;
