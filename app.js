const runEnv = require('./env')
const database = require('./database')
const server = require('./server')

runEnv()
database.connectToDB()
server.runServer()