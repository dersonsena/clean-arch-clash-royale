import { HapiAdapter } from '@/adapter/http'
import routes from '@/main/config/routes'
import Hapi from '@hapi/hapi'

const hapiApp = Hapi.server({
  port: 5001,
  host: "localhost"
})

routes.forEach(route => hapiApp.route({
  method: route.method,
  path: route.path,
  handler: HapiAdapter.adapt(route.controller.perform)
}))

export { hapiApp }