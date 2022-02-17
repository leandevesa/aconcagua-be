function ValidationError(message, statusCode, meta) {
    this.handled = true;
    this.message = message;
    this.statusCode = statusCode;
    this.meta = meta;
}

module.exports = {
    ValidationError
}