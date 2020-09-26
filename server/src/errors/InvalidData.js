class InvalidDataError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.success = false;
  }
}

module.exports = InvalidDataError;
