const database = require('../database')

const getLeaderboard = app => {

    app.get('/leaderboard', (req, res) => {
        console.log(req.query.username)
        database.getUserScoreFromLeaderboard(req.query.username, (err, data) => {

            let jsonObj = {
                username: data[0].username,
                score: data[0].score,
            }

            res.send(JSON.stringify(jsonObj))
        })
    })
}

const setLeaderboard = app => {

    app.post('/leaderboard', (req, res) => {
        let buffer = [];

        req.on("data", (data) => {
            buffer.push(data)
        }).on("end", () => {
            const JSONObj = JSON.parse(decodeURIComponent(Buffer.concat(buffer).toString()))

            database.insertUserDataIntoLeaderboard(JSONObj.username, JSONObj.score).then(result => {
                res.send(`
                <html>
                    <body>
                        <h1>Data was inserted into the database!</h1>
                    </body>
                </html>
            `)
            }).catch(err => {
                console.log(err);
            })
        })
    })
}

module.exports = {
    getLeaderboard,
    setLeaderboard
}