import { MongoOrm } from "@/adapter/contracts";
import { Card, Deck } from "@/domain/entity/deck";
import { Player } from "@/domain/entity/player";
import { DeckError } from "@/domain/error";
import { DeckRepository } from "@/domain/repository";

export class DeckRepositoryMongo implements DeckRepository {
  constructor (
    private readonly mongoOrm: MongoOrm
  ) {}

  async getById(deckId: number|string): Promise<Deck> {
    const deckDocument = await this.mongoOrm.findById(deckId)
    if (!deckDocument) throw DeckError.deckNotFound(deckId)
    return this.createDeckFromDocument(deckDocument)
  }

  async create(player: Player, cards: Card[], capacity: number): Promise<Deck> {
    player.setId(this.mongoOrm.generateId())
    const playerMongo = { ...player, _id: player.getId() }
    
    const cardsMongo = cards.map((card: Card) => {
      card.setId(this.mongoOrm.generateId())
      return { ...card, _id: card.getId()}
    })

    const deckDocument = await this.mongoOrm.insert({ cards: cardsMongo, capacity, player: playerMongo })
    return this.createDeckFromDocument(deckDocument)
  }

  private createDeckFromDocument(deckDocument: any): Deck {
    const { _id: id, name, trophy, clan } = deckDocument.player;
    const player = new Player({ id, name, trophy, clan })

    const cards = deckDocument.cards.map((card: any) => new Card({
      id: card._id,
      name: card.name,
      level: card.level,
      elixir: card.elixir
    }))

    return new Deck({
      id: deckDocument._id,
      cards,
      player,
      capacity: deckDocument.capacity
    })
  }
}