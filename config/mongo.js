const mongoose = require('mongoose')
const DB_URL = process.env.MONGO_URI
const MONGO_TEST = process.env.MONGO_TEST

const loadModels = require('../app/models')
const dbType = (process.env.NODE_ENV !== 'test') ? DB_URL : MONGO_TEST
console.log(dbType)
module.exports = () => {
    const connect = () => {
        mongoose.Promise = global.Promise

        mongoose.connect(
            dbType, {
                keepAlive: true,
                reconnectTries: Number.MAX_VALUE,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            err => {
                let dbStatus = ''
                if (err) {
                    dbStatus = `*    Error connecting to DB: ${err}\n****************************\n`
                }
                dbStatus = `*    DB Connection: OK\n****************************\n`
                    // Prints initialization
                console.log('****************************')
                console.log('*    Starting Server')
                console.log(`*    Port: ${process.env.PORT || 3000}`)
                console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`)
                console.log(`*    WS_SOCKET: ${process.env.WS_PORT || 5000}`)
                console.log(`*    Database: MongoDB`)
                console.log(dbStatus)
            }
        )
        mongoose.set('useCreateIndex', true)
        mongoose.set('useFindAndModify', false)
    }
    connect()

    mongoose.connection.on('error', console.log)
    mongoose.connection.on('disconnected', connect)

    loadModels()
}