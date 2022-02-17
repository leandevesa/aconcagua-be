module.exports = {
    handle: function (req, res, error = {}) {

        const message = error.message;
        const statusCode = error.handled ? error.statusCode : 500;

        if (res) {
            res.status(statusCode)
                .json({
                    success: false,
                    message,
                    error: {
                        statusCode,
                        message,
                        error
                    },
                });
        }
    }
}