import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import customerRoute from './routes/customer.route'

const app = express()
const port = 3500

app.use(bodyParser.json())

app.use(cors())
// We set the CORS origin to * so that we don't need to
// worry about the complexities of CORS.
app.use(
    cors({
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'X-Access-Token',
            'Authorization',
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Methods',
        ],
        methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
        preflightContinue: true,
        origin: '*',
    })
)

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

app.get('/', (_req, res) => res.json('Home Page..'))

// apis for customers
customerRoute(app)

export default app
