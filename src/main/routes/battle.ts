import { ControllerBase } from "@/adapter/controllers/ControllerBase";
import { Router } from "express";
import { expressRouteAdapter } from "../adapters";

export default (router: Router) => {
  router.post('/do-battle', expressRouteAdapter(new DoBattleController()))
}

class DoBattleController extends ControllerBase {
  async perform(httpRequest: any): Promise<any> {
    console.log('Do Battle Controller!')
    return true
  }
}