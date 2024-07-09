// Define a class `ApiError` that extends the built-in `Error` class

class ApiError extends Error {
  // Constructor for `ApiError` class
  constructor(
    statusCode, // HTTP status code indicating the type of error
    message = "Something went wrong", // Default error message
    errors = [], // Array to hold specific error details
    stack = "" // Stack trace for debugging
  ) {
    // Call the parent class (Error) constructor with the message
    super(message);
    this.statusCode = statusCode; // Assign the status code to the instance
    this.data = null; // Initialize `data` property to null
    this.message = message; // Assign the error message to the instance
    this.success = false; // Set success property to false, indicating an error
    this.errors = errors; // Assign the errors array to the instance

    // If a stack trace is provided, use it(write to know errror is in which file)
    if (stack) {
      this.stack = stack;
    } else {
      // If no stack trace is provided, capture the stack trace of this error instance
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the `ApiError` class so it can be used in other modules
export { ApiError };
