import { Request, Response } from "express"

export class ExpressAdapter {
  static adapt (fn: Function) {
    return async function (req: Request, res: Response) {
      const { params: routeParams, query, body } = req;
      const payload = await fn({ routeParams, query, body })
      res.json(payload)
    }
  }
}