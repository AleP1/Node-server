const {envs} = require('./config/env')
const {startServer} = require('./server/server')


const main = () => {
 startServer({
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH
 })
}


(async () => {
    await main()
})()

    