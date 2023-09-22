import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import connect from './data/data.js';

async function main() {
    const Data = await connect();
    const app = express();
    app.use(bodyParser.json({ limit: '50mb' }))
    app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))


    app.get('/data', async (req, res) => {
        res.send(await Data.findAll)
    })





    app.listen(3500)
}

main();

