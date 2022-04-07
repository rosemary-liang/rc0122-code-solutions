const ClientError = require('./client-error');

function errorMiddleware(err, req, res, next) {
  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
  } else {
    throw new ClientError(400, 'an unexpected error occurred');
  }
}

module.exports = errorMiddleware;
