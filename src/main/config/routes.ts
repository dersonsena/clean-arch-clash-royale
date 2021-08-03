import { HttpController } from "@/adapter/contracts/HttpController";
import { CreateDeckController, DoBattleController } from "@/adapter/controllers";

const routes: AppRoute[] = [
  {
    method: "POST",
    path: "/create-deck",
    controller: new CreateDeckController(),
    meta: []
  },
  {
    method: "GET",
    path: "/do-battle",
    controller: new DoBattleController(),
    meta: []
  }
]

export type AppRoute = {
  method: string,
  path: string,
  controller: HttpController,
  meta: object[]
}

export default routes