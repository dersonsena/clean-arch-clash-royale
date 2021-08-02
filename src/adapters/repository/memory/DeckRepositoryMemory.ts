import { Card, Deck } from '@/domain/entity/deck';
import { DeckError } from '@/domain/entity/error';
import { Player } from '@/domain/entity/player';
import { DeckRepository } from '@/domain/repository';

export class DeckRepositoryMemory implements DeckRepository {
  private id = 1;
  private readonly decks: Deck[] = [];

  async create(player: Player, cards: Card[], capacity: number): Promise<Deck> {
    const deck = new Deck({ id: this.id, cards, player, capacity })
    this.decks.push(deck)
    this.id++
    return Promise.resolve(deck)
  }

  async getById(deckId: number): Promise<Deck> {
    const selected = this.decks.find(deck => deck.id === deckId)
    if (!selected) throw DeckError.deckNotFound(deckId)
    return selected
  }
}