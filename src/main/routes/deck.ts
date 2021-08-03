import { ControllerBase } from "@/adapter/controllers/ControllerBase";
import { Router } from "express";
import { expressRouteAdapter } from "../adapters";

export default (router: Router) => {
  router.post('/deck', expressRouteAdapter(new CreateDeckController()))
}

class CreateDeckController extends ControllerBase {
  async perform(httpRequest: any): Promise<any> {
    console.log('Create Deck Controller')
    return true
  }
}