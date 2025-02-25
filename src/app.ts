import express, { Application } from 'express'

import mainRouter from './routes/index'
import { logger } from './utils/logger'
import { CONSTANTS } from './utils/constants'

const app: Application = express()
const port = CONSTANTS.SERVER_PORT

// Middleware to parse JSON bodies
app.use(express.json())

// Use the consolidated routes
app.use(mainRouter)

app.listen(port, () => {
    logger.warn(`Test Evaluator Engine listening at http://localhost:${CONSTANTS.SERVER_PORT}`)
})
