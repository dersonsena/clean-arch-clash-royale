import { Player } from "@/domain/entity/player";
import { DeckCapacityExceededError } from "@/domain/entity/error";
import { Card } from "@/domain/entity/deck";

export class Deck {
  readonly id: number | string
  readonly cards: Card[]
  readonly player: Player
  readonly capacity: number = 8

  constructor (
    id: number | string,
    cards: Card[],
    player: Player,
    capacity: number = 8
  ) {
    const cardLength = cards.length;
    if (cardLength > this.capacity) {
      throw new DeckCapacityExceededError(this.capacity, cardLength)
    }

    this.id = id
    this.cards = cards
    this.player = player
    this.capacity = capacity
  }

  average (): number {
    let totalElixir = 0;
    for (let card of this.cards) {
        totalElixir += card.elixir;
    }

    return Number((totalElixir / this.cards.length).toFixed(1));
  }
}