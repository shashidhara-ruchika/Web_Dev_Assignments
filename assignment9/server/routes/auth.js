const express = require('express')
const { validateEmailField, validatePasswordField } = require('../services/common/validations')
const { loginUser, logoutUser } = require('../services/auth')
const router = express.Router()

router.post('/login', async(req, res) => {
    const email = req.body.email
    const password = req.body.password 
    try {
        validateEmailField(email)
        validatePasswordField(password)
    } catch (error) {
        return res.status(400).json({ message : error.message })
    }

    try {
        let loggedInResponse = await loginUser(email, password)
        return res.json(loggedInResponse)
    } catch (error) {
        if (error.name === "UserDoesNotExist") {
            return res.status(409).json({ message : error.message})
        }
        if (error.name === "InvalidCredentials") {
            return res.status(401).json({ message : error.message })
        }
        return res.status(500).json({ message: error.message })
    }
})

router.post('/logout', auth, async(req, res) => {
    try {
        await logoutUser()
        return res.json({ message : "User Logged Out"})
    } catch (error) {
        if (error.name === "UserDoesNotExist") {
            return res.status(409).json({ message : error.message})
        }
        return res.status(500).json({ message: error.message })
    }
})

router.get('/user', async(req, res) => {

})

module.exports = router