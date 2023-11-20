const { InvalidCredentials } = require("../errors/errors")
const { compareHashes } = require("./hash")
const { getUserByEmail } = require("./user")
const jwt = require('jsonwebtoken')

loginUser = async (email, password) => {
    let user = await getUserByEmail(email)
    const isSame = await compareHashes(password, user.password)
    if (!isSame) {
        throw new InvalidCredentials("Incorrect Password")
    }
    return {
        user: user.name,
        email: user.email,
        token: generateToken(user.email)
    }   
}

logoutUser = async () => {
    console.log("User Logged Out")    
}

generateToken = (email) => {
    return jwt.sign({email}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

module.exports = {
    loginUser,
    logoutUser
}