const mongoose = require('mongoose')
const schema = require('./Schema/leaderboardSchema')

const connectToDB = () => {
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => {

    }).catch(err => {
        console.log(err);
    })
}

const insertUserDataIntoLeaderboard = (username, score) => {
    return mongoose.model('Leaderboard', schema.leaderboardSchema).insertMany({ username, score })
}

const getUserScoreFromLeaderboard = (username, callback) => {
    mongoose.model('Leaderboard', schema.leaderboardSchema).find({ username }, callback)
}

module.exports = {
    connectToDB,
    insertUserDataIntoLeaderboard,
    getUserScoreFromLeaderboard
}