import { ExpressAdapter } from '@/adapter/http'
import express, { json } from 'express'
import cors from 'cors'
import { CreateDeckController } from '@/adapter/controllers/CreateDeckController'

const expressApp = express()

// middlewares
// app.use(cors())
// app.use(json())
// app.use((request, response, next) => {
//   response.type('json')
//   next()
// })

// routes
expressApp.get('/create-deck', ExpressAdapter.adapt((new CreateDeckController).perform))

export { expressApp }