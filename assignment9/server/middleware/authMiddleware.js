const jwt = require('jsonwebtoken')
const { getUserByEmail } = require('../services/user')
const { mapUsertoDAO } = require('../services/common/mapper')

auth = async (req, res, next) => {

    let token 
    if (req.headers.authorization 
        && req.headers.authorization.startsWith('Bearer')) {
            try {
                token = req.headers.authorization.split(' ')[1]
                const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
                let verifiedUser = await getUserByEmail(decodedToken.email)
                req.user = mapUsertoDAO(verifiedUser)
                next()
            } catch (error) {
                return res.status('403').json({ message: "Unauthorized"})
            }
        }

    if (!token) {
        return res.status('403').json({ message: "Unauthorized, no token"})
    }
}

module.exports = {
    auth
}