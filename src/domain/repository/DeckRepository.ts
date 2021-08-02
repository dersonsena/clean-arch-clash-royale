import { Card, Deck } from "@/domain/entity/deck";
import { Player } from "@/domain/entity/player";

export interface DeckRepository {
  create(player: Player, cards: Card[], capacity: number): Promise<Deck>
  getById(deckId: number|string): Promise<Deck>
}