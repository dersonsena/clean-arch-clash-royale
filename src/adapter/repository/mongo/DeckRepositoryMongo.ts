import { Card, Deck } from "@/domain/entity/deck";
import { Player } from "@/domain/entity/player";
import { DeckError } from "@/domain/error";
import { DeckRepository } from "@/domain/repository";
import mongoose from "mongoose";
import { DeckModel } from './models';

export class DeckRepositoryMongo implements DeckRepository {
  async getById(deckId: number|string): Promise<Deck> {
    const deckDocument = await DeckModel.findById(deckId).exec()
    if (!deckDocument) throw DeckError.deckNotFound(deckId)
    return this.createDeckFromDocument(deckDocument)
  }

  async create(player: Player, cards: Card[], capacity: number): Promise<Deck> {
    player.setId(mongoose.Types.ObjectId().toString())
    const playerMongo = { ...player, _id: player.getId() }
    
    const cardsMongo = cards.map((card: Card) => {
      card.setId(mongoose.Types.ObjectId().toString())
      return { ...card, _id: card.getId()}
    })

    const deckModel = new DeckModel({ cards: cardsMongo, capacity, player: playerMongo })
    const deckDocument = await deckModel.save()
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