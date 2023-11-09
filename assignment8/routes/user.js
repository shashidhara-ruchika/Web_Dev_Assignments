const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')


router.get('/getAll', async (req, res) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.type })
    }
})

router.post('/create', async (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password
    const isvalid = await hasValidUserFields(email, name, password, res)
    if (!isvalid) {
        return res
    }

    let existingUser = await findUser(email)
    if (existingUser != null) {
        return res.status(409).json({ message: "User already exists" }) 
    }
    const hashedPassword = await getHash(password)
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }

})

router.put('/edit', getUser, async (req, res) => {
    const email = req.query.email
    const name = req.body.name
    const password = req.body.password
    const isvalid = await hasValidUserFields(email, name, password, res)
    if (!isvalid) {
        return res
    }

    const hashedPassword = await getHash(password)
    if (req.body.name != null) {
        res.user.name = name
    }
    if (req.body.password != null) {
        res.user.password = hashedPassword
    }

    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

router.delete('/delete', getUser, async (req, res) => {
    const email = req.query.email
    if (!isValidEmail(email)) {
        res.status(400).json({ message: "Email validation failed" })
        return false
    }

    try {
        await deleteUser(res.user.email)
        res.json({ message : "Deleted User" })
    } catch (error) {
        res.status(500).json({ message: error.message })   
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await findUser(req.query.email)
        if (user == null) {
            return res.status(404).json({ message : "Cannot find User" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })   
    }
    res.user = user
    next()
}

async function findUser(email) {
    return await User.findOne({ email : email})
}

async function deleteUser(email) {
    await User.deleteOne({ email: email })
}

async function getAllUsers() {
    const users = await User.find()
    return { size: users.length, users: users }
}

async function getHash(str) {
    return bcrypt.hash(str, 10)
}

function isValidName(name) {
    return testRegex(/^(\w{3,}(?:\s{1}\w{3,})*|\w{3,})$/, name)
}

function isValidPassword(password) {
    return testRegex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, password)
}

function isValidEmail(email) {
    return testRegex(/^[A-Za-z0-9._%+-]+@northeastern\.edu$/, email)
}

async function hasValidUserFields(email, name, password, res) {
    if (!isValidEmail(email)) {
        res.status(400).json({ message: "Email validation failed" })
        return false
    }
    if (!isValidName(name)) {
        res.status(400).json({ message: "Name validation failed" })
        return false
    }
    if (!isValidPassword(password)) {
        res.status(400).json({ message: "Password validation failed" })
        return false
    }
    return true
}

function testRegex(pattern, str) {
    return pattern.test(str)
}
 
module.exports = router

