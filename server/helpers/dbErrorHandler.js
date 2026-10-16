// Turns Mongoose / MongoDB errors into a short, readable message for the API response.

const getUniqueErrorMessage = (err) => {
  // Duplicate key errors include the field name in keyValue, e.g. { email: 'a@b.com' }
  const fieldName = err.keyValue ? Object.keys(err.keyValue)[0] : null
  if (!fieldName) return 'Unique field already exists'
  return fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists'
}

const getErrorMessage = (err) => {
  // Duplicate key (e.g. two users with the same email)
  if (err.code === 11000 || err.code === 11001) {
    return getUniqueErrorMessage(err)
  }

  // Invalid MongoDB id such as /api/projects/123
  if (err.name === 'CastError') {
    return `Invalid ${err.path}: ${err.value}`
  }

  // Schema validation errors - return the first message found
  if (err.errors) {
    for (const fieldName in err.errors) {
      if (err.errors[fieldName].message) return err.errors[fieldName].message
    }
  }

  return err.message || 'Something went wrong'
}

export default { getErrorMessage }
