import { deckInputs } from "@/data-source";
import { Card } from "@/domain/entity/deck";
import { Player } from "@/domain/entity/player";
import { CreateDeck } from "@/domain/usecase";
import { MongooseAdapter } from "@/infra/mongodb";
import { HttpRequest } from "../contracts/HttpController";
import { DeckRepositoryMemory } from "../repository/memory/DeckRepositoryMemory";
import { DeckRepositoryMongo } from "../repository/mongo";
import { ControllerBase } from "./ControllerBase";

export class CreateDeckController extends ControllerBase {
  constructor () {
    super()
  }

  override async perform (httpRequest: HttpRequest): Promise<object> {
    // In Memory
    const deckRepositoryMemory = new DeckRepositoryMemory();

    // MongoDB
    const mongoOrm = new MongooseAdapter()
    const deckRepositoryMongo = new DeckRepositoryMongo(mongoOrm);

    let { cards, player, capacity } = httpRequest.body
    // ~> validate request payload here !

    cards = cards.map((card: any) => new Card({
      id: card.id,
      name: card.name,
      level: card.level,
      elixir: card.elixir
    }))

    player = new Player({
      id: player.id,
      name: player.name,
      trophy: player.trophy,
      clan: player.clan
    })

    const createDeck = new CreateDeck(deckRepositoryMongo)
    const deckData = await createDeck.execute({ player, cards, capacity })
    
    console.log("====== DECK CRIADO ======")
    console.log(deckData)

    return deckData
  }
}