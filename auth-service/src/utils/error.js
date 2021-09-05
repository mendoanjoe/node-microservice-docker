// eslint-disable-next-line no-unused-vars
function errorHandler(err, _req, res, next) {
  console.error(err.stack);
  res
    .status(err.httpStatusCode || 500)
    .json({
      status: false,
      data: null,
      error: err.stack,
    });
}

module.exports = errorHandler;
