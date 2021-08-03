import { ControllerBase } from "@/adapter/controllers/ControllerBase"
import { Request, RequestHandler, Response } from "express"

export const expressRouteAdapter: Adapter = controller => async (request: Request, response: Response) => {
  const { statusCode, data } = await controller.handle({ ...request.body })
  const json = statusCode === 200 ? data : { error: data.message }
  response.status(statusCode).json(json)
}

type Adapter = (controller: ControllerBase) => RequestHandler