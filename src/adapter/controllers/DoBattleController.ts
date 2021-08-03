import { HttpRequest } from "../contracts/HttpController"
import { ControllerBase } from "./ControllerBase"

export class DoBattleController extends ControllerBase {
  constructor () {
    super()
  }

  override async perform (httpRequest: HttpRequest): Promise<object> {
    console.log({ httpRequest })
    return { status: 'ok', message: 'Create Deck Controller' }
  }
}