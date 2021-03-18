const express = require('express')
const leaderboardEndpoint = require('./endpoints/leaderboard')

const app = express()

const runServer = () => {

    leaderboardEndpoint.getLeaderboard(app)
    leaderboardEndpoint.setLeaderboard(app)

    app.get('/', (req, res) => {
        res.send(`
            <html>
                <body>
                    <h1>Welcome!</h1>
                </body>
            </html>
        `)
    })

    app.listen(process.env.PORT, () => {
        console.log('Server started!');
    })
}

module.exports = {
    app,
    runServer
}