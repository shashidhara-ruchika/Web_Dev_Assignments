const bcrypt = require('bcrypt')

generateHash = (str) => {
    return bcrypt.hash(str, 10)
}

compareHashes = async (plaintextPassword, hash) => {
    return await bcrypt.compare(plaintextPassword, hash)
}

module.exports = {
    generateHash,
    compareHashes
}