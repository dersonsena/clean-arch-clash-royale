import { HttpController, HttpRequest } from "../contracts/HttpController";

export abstract class ControllerBase implements HttpController {
  perform (httpRequest: HttpRequest): Promise<object> {
    throw new Error("Controller is not implemented.");
  }

  async handle (httpRequest: HttpRequest): Promise<any> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      console.log(error)
    }
  }
}