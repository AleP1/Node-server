import { envs } from './config/env.js'
import {startServer} from './server/server.js'


const main = () => {
 startServer({
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH
 })
}


(async () => {
    await main()
})()

    