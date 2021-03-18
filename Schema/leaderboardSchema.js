const mongoose = require('mongoose')

const leaderboardSchema = mongoose.Schema({
    username: String,
    score: Number,
})

module.exports = {
    leaderboardSchema
}