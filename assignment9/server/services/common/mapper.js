module.exports = {

    mapUsertoDAO: (user) => {
        return {
            name: user.name,
            email: user.email,
            // password: user.password 
        }

    }

}