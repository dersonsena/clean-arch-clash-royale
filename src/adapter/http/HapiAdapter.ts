import { Request } from '@hapi/hapi'

export class HapiAdapter {
  static adapt (fn: Function) {
    return async function (req: Request) {
      const { params: routeParams, query, payload: body } = req;
      const payload = await fn({ routeParams, query, body })
      return payload
    }
  }
}