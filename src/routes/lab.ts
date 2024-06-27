import { Request, Response } from 'express'
import express from 'express'

import { handleJsonPost } from '../controllers'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.send(`Hello from Lab Router!`)
})

router.get('/lab/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.send(`Evaluating ID: ${id}`)
})

export default router
