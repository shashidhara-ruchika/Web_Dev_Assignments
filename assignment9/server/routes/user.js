const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/authMiddleware')

const { getAllUsers, deleteUser, editUser, createUser } = require('../services/user')
const { validateEmailField, validateNameField , validateUserFields, validatePasswordField } = require("../services/common/validations")


router.get('/getAll', auth, async (req, res) => {
    const extraParams = req.query;
    if (Object.keys(extraParams).length > 0) {
        return res.status(400).json({ message: 'Bad Request: Additional query parameters are not allowed' });
    }

    try {
        const users = await getAllUsers()
        return res.json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/create', async (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password
    try {
        validateUserFields(email, name, password)
    } catch (error) {
        return res.status(400).json({ message : error.message })
    }

    try {
        const user = await createUser(email, name, password)
        return res.status(201).json(user)
    } catch (error) {
        if (error.name === "UserAlreadyExists") {
            return res.status(409).json({ message : error.message})
        }
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit', auth, async (req, res) => {
    const email = req.query.email
    const name = req.body.name
    const password = req.body.password
    try {
        validateEmailField(email)
        if (name != null) {
            validateNameField(name)
        }
        if (password != null) {
            validatePasswordField(password)
        }
    } catch (error) {
        return res.status(400).json({ message : error.message })
    }

    try {
        const updatedUser = await editUser(email, name, password)
        return res.json(updatedUser)
    } catch (error) {
        if (error.name === "UserDoesNotExist") {
            return res.status(409).json({ message : error.message})
        }
        return res.status(500).json({ message: error.message })
    }

})

router.delete('/delete', auth, async (req, res) => {
    let email = req.query.email
    try {
        validateEmailField(email)
    } catch (error) {
        return res.status(400).json({ message : error.message })
    }

    try {
        await deleteUser(email)
        return res.json({ message : "Deleted User" })
    } catch (error) {
        if (error.name === "UserDoesNotExist") {
            return res.status(409).json({ message : error.message})
        }
        return res.status(500).json({ message: error.message })   
    }
})


 
module.exports = router

