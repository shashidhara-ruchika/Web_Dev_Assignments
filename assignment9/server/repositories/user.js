const User = require('../models/user')
const { mapUsertoDAO } = require('../services/common/mapper')

findUserByEmail = async (email) => {
    return await User.findOne({ email: email })
}

deleteUserByEmail = async (email) => {
    await User.deleteOne({ email: email })
}

findAllUsers = async () => {
    const users = await User.find()
    const usersDAO = users.map(mapUsertoDAO)
    return { size: users.length, users: usersDAO }
}

saveOrUpdateUser = async (user) => {
    const userObject = await user.save()
    return userObject
}

module.exports = {
    findUserByEmail,
    deleteUserByEmail,
    findAllUsers,
    saveOrUpdateUser
}

