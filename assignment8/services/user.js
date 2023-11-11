const { UserDoesNotExist, UserAlreadyExists } = require('../errors/errors')
const { mapUsertoDAO } = require('../mappers/mapper')
const { findUserByEmail, deleteUserByEmail, findAllUsers, saveOrUpdateUser } = require('../repositories/user')
const { generateHash } = require('./hash')
const User = require('../models/user')
const { compare } = require('bcrypt')

getUserByEmail = async (email) => {
    let user = await findUserByEmail(email)
    if (user == null) {
        throw new UserDoesNotExist()
    }
    return user
}

getAllUsers = async () => {
    return await findAllUsers()
}

deleteUser = async (email) => {
    let user = await getUserByEmail(email)
    await deleteUserByEmail(email)
}

editUser = async (email, name, password) => {
    let user = await getUserByEmail(email)
    let previousHashedPassword = user.password
    
    if (name != null) {
        user.name = name
    }

    if (password != null) {
        const hashedPassword = await generateHash(password)
        user.password = hashedPassword
        const isSame = await compareHashes(password, previousHashedPassword)
        console.log("Passwords are same? ", isSame)
    } else {
        console.log("Passwords are same?", true)
    }

    const updatedUser = await saveOrUpdateUser(user)
    return mapUsertoDAO(updatedUser)
}

createUser = async (email, name, password) => {
    let existingUser = await findUserByEmail(email)
    if (existingUser != null) {
        throw new UserAlreadyExists()
    }
    const hashedPassword = await generateHash(password)
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    })
    const newUser = await saveOrUpdateUser(user)
    return mapUsertoDAO(newUser)
}

module.exports = {
    getUserByEmail,
    getAllUsers,
    deleteUser,
    editUser,
    createUser
}
