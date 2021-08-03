import { CreateDeck } from "@/domain/usecase";
import { MongooseAdapter } from "@/infra/mongodb";
import { HttpRequest } from "../contracts/HttpController";
import { DeckRepositoryMemory } from "../repository/memory/DeckRepositoryMemory";
import { DeckRepositoryMongo } from "../repository/mongo";
import { ControllerBase } from "./ControllerBase";

export class CreateDeckController extends ControllerBase {
  async perform (httpRequest: HttpRequest): Promise<object> {
    // In Memory
    const deckRepositoryMemory = new DeckRepositoryMemory();

    // MongoDB
    const mongoOrm = new MongooseAdapter()
    const deckRepositoryMongo = new DeckRepositoryMongo(mongoOrm);

    // ~> validate request payload here !

    const createDeck = new CreateDeck(deckRepositoryMongo)
    const deckData = await createDeck.execute(httpRequest.body)
    
    console.log("====== DECK CRIADO ======")
    console.log(deckData)

    return deckData
  }
}