import { Player } from "@/domain/entity/player";
import { DeckError } from "@/domain/error";
import { Card } from "@/domain/entity/deck";

export class Deck {
  readonly id?: number | string
  readonly cards: Card[]
  readonly player: Player
  readonly capacity: number = 8

  constructor ({ id, cards, player, capacity }: Deck.Params) {
    const cardLength = cards.length;
    if (cardLength > this.capacity) throw DeckError.capacityExeceeded(this.capacity, cardLength)

    this.id = id
    this.cards = cards
    this.player = player
    this.capacity = capacity
  }

  average (): number {
    let totalElixir = 0;
    for (let card of this.cards) {
        totalElixir += card.getElixir();
    }

    return Number((totalElixir / this.cards.length).toFixed(1));
  }

  isTotallyFilled (): boolean {
    return this.cards.length === this.capacity
  }
}

export namespace Deck {
  export type Params = {
    id?: number | string,
    cards: Card[],
    player: Player,
    capacity: number
  }
}