const logger = require("../loggers/loggers");

function errorHandler(err, req, res, next) {
    // Verifica si hay errores específicos que deseas manejar
    if (err) {
        // Personaliza la respuesta de error según tus necesidades
        const errorMessage = "Hubo un error en la solicitud.";
        logger.error(errorMessage);

        // Establece el estado de la respuesta (por ejemplo, 400 para Bad Request)
        res.status(400).send(errorMessage);
    } else {
        // Si no se trata de un error específico, pasa al siguiente middleware
        next(err);
    }
}

module.exports = errorHandler;

