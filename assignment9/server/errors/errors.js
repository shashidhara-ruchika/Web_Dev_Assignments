class UserDoesNotExist extends Error {
     get message() {
          return "Cannot find user"
     }
     get name() {
          return "UserDoesNotExist"
     }
}

class UserInputError extends Error {
     constructor(message) {
          super(message)
     }
     get name() {
          return "UserInputError"
     }
}

class UserAlreadyExists extends Error {
     get message() {
          return "User already exists"
     }
     get name() {
          return "UserAlreadyExists"
     }
}




module.exports = { 
     UserDoesNotExist,
     UserInputError,
     UserAlreadyExists
}