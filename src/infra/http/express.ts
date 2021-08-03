import { ExpressAdapter } from '@/adapter/http'
import express, { json } from 'express'
import cors from 'cors'
import routes from '@/main/config/routes'

const expressApp = express()

// middlewares
expressApp.use(cors())
expressApp.use(json())
expressApp.use((request, response, next) => {
  response.type('json')
  next()
})

routes.forEach(route => {
  switch (route.method) {
    case "GET":
      expressApp.get(route.path, ExpressAdapter.adapt(route.controller.perform))
      break

    case "POST":
      expressApp.post(route.path, ExpressAdapter.adapt(route.controller.perform))
      break
  }
})

export { expressApp }