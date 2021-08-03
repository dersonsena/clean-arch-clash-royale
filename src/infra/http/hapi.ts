import { CreateDeckController, DoBattleController } from '@/adapter/controllers'
import { HapiAdapter } from '@/adapter/http'
import Hapi from '@hapi/hapi'

const hapiApp = Hapi.server({
  port: 5001,
  host: "localhost"
})

hapiApp.route({
  method: "POST",
  path: '/create-deck',
  handler: (req) => {
    return (new CreateDeckController()).handle({
      routeParams: req.params,
      query: req.query,
      body: req.payload
    })
  }
})

hapiApp.route({
  method: "POST",
  path: '/do-battle',
  handler: (req) => {
    return (new DoBattleController()).handle({
      routeParams: req.params,
      query: req.query,
      body: req.payload
    })
  }
})

export { hapiApp }