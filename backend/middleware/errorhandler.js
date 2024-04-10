const { constants } = require('../constants');

const erorrHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
//saish
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.FORBIDDEN:
            res.json({
                title: "forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.SERVER_ERROR:
            res.json({
                title: "SERVER ERROR",
                message: err.message,
                stackTrace: err.stack
            });
            break;


        default:
            console.log("No error,all good");
            break;
    }


};

module.exports = erorrHandler;