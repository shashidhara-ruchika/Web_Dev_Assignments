const express = require('express')
const router = express.Router()

const { getAllUsers, deleteUser, editUser, createUser } = require('../services/user')
const { validateEmailField, validateNameField , validateUserFields, validatePasswordField } = require("../validators/validations")


router.get('/getAll', async (req, res) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
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

router.put('/edit', async (req, res) => {
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
        res.json(updatedUser)
    } catch (error) {
        if (error.name === "UserDoesNotExist") {
            return res.status(409).json({ message : error.message})
        }
        res.status(500).json({ message: error.message })
    }

})

router.delete('/delete', async (req, res) => {
    let email = req.query.email
    try {
        validateEmailField(email)
    } catch (error) {
        return res.status(400).json({ message : error.message })
    }

    try {
        await deleteUser(email)
        res.json({ message : "Deleted User" })
    } catch (error) {
        res.status(500).json({ message: error.message })   
    }
})


 
module.exports = router

