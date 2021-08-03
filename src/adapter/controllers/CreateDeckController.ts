import { ControllerBase } from "./ControllerBase";

export class CreateDeckController extends ControllerBase {
  constructor () {
    super()
  }

  async perform(params: object, queryString: object, body: any): Promise<any> {
    console.log({ params, body, queryString })
    return true
  }
}