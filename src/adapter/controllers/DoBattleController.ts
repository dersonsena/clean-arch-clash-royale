import { DoBattle } from "@/domain/usecase";
import { MongooseAdapter } from "@/infra/mongodb";
import { HttpRequest } from "../contracts/HttpController"
import { DeckRepositoryMemory } from "../repository/memory/DeckRepositoryMemory";
import { DeckRepositoryMongo } from "../repository/mongo";
import { ControllerBase } from "./ControllerBase"

export class DoBattleController extends ControllerBase {
  constructor () {
    super()
  }

  override async perform (httpRequest: HttpRequest): Promise<object> {
    // In Memory
    const deckRepositoryMemory = new DeckRepositoryMemory();

    // MongoDB
    const mongoOrm = new MongooseAdapter()
    const deckRepositoryMongo = new DeckRepositoryMongo(mongoOrm);

    // ~> validate request payload here !

    console.log("====== BATTLE TIME !! ======");
    const battle = new DoBattle(deckRepositoryMongo)
    const battleResult = await battle.execute(httpRequest.body)
    
    console.log(battleResult)

    return battleResult
  }
}