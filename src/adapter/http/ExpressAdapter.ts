import { Request, Response } from "express"

export class ExpressAdapter {
  static adapt (fn: Function) {
    return async function (req: Request, res: Response) {
      const payload = await fn(req.params, req.query, req.body)
      res.json(payload)
    }
  }
}