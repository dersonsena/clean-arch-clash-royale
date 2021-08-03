import { ExpressAdapter } from '@/adapter/http'
import express, { json } from 'express'
import cors from 'cors'
import { CreateDeckController, DoBattleController } from '@/adapter/controllers'

const expressApp = express()

// middlewares
expressApp.use(cors())
expressApp.use(json())
expressApp.use((request, response, next) => {
  response.type('json')
  next()
})

expressApp.post('/create-deck', (req, res) => {
  const payload = (new CreateDeckController()).handle({
    routeParams: req.params,
    query: req.query,
    body: req.body
  })

  res.json(payload)
})

expressApp.post('/do-battle', (req, res) => {
  const payload = (new DoBattleController()).handle({
    routeParams: req.params,
    query: req.query,
    body: req.body
  })

  res.json(payload)
})

export { expressApp }