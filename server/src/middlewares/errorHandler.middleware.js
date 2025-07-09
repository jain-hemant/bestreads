const errorHandler = (err, req, res, next) => {
    // Handle Mongoose or system errors.
    let statusCode = 500;
    let message = "Internal Server Error";

    if (err.statusCode) statusCode = err.statusCode;
    if (err.message) message = err.message;

    res.status(statusCode).json({
        success: false,
        message,
        errorType: err.name || "Error",
        stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
};

module.exports = errorHandler;
