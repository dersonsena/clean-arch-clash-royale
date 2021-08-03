import { CreateDeckController } from '@/adapter/controllers/CreateDeckController'
import { HapiAdapter } from '@/adapter/http'
import Hapi from '@hapi/hapi'

const hapiApp = Hapi.server({
  port: 5001,
  host: "localhost"
})

hapiApp.route({
  method: "GET",
  path: "/create-deck",
  handler: HapiAdapter.adapt((new CreateDeckController).perform)
})

export { hapiApp }