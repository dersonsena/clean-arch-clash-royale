import { HttpController, HttpRequest } from "../contracts/HttpController";

export abstract class ControllerBase implements HttpController {
  abstract perform (httpRequest: HttpRequest): Promise<object>

  async handle (httpRequest: HttpRequest): Promise<any> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500,
        data: error
      }
    }
  }
}