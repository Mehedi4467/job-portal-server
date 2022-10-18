var createError = require('http-errors');

//404 error handelar
function notFound(req, res, next) {
    next(createError(404, "Your requested content was not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {
    // console.log(err)
    // res.locals.error = err;
    // res.locals.error
    res.send(err);
}

module.exports={
    notFound,
    errorHandler
}