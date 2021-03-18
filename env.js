const runEnv = () => {
    if (process.argv[2] == '--dev') {
        require('dotenv').config({ path: `./dev.env` })
    }
    else if (process.argv[2] == '--prod') {
        require('dotenv').config({ path: `./prod.env` })
    }
}

module.exports = runEnv;