import { Request } from '@hapi/hapi'

export class HapiAdapter {
  static adapt (fn: Function) {
    return async function (req: Request) {
      const payload = await fn(req.params, req.query, req.payload)
      return payload
    }
  }
}