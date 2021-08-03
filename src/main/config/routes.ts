import { HttpController } from "@/adapter/contracts/HttpController";
import { CreateDeckController, DoBattleController } from "@/adapter/controllers";

export type AppRoute = {
  method: string,
  path: string,
  controller: HttpController,
  meta: object[]
}

const routes: AppRoute[] = [
  {
    method: "GET",
    path: "/create-deck",
    controller: new CreateDeckController,
    meta: []
  },
  {
    method: "GET",
    path: "/do-battle",
    controller: new DoBattleController,
    meta: []
  }
]

export default routes