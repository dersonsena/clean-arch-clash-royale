import { Deck } from "@/domain/entity/deck"
import { DomainError } from "./DomainError"

export class DeckError extends DomainError {
  static capacityExeceeded (capacity: number, provided: number) {
    return new DeckError(
      `Deck's capacity is ${capacity} and ${provided} was provided`,
      `DeckCapacityExceededError`
    )
  }

  static deckNotFound (deckId: number|string) {
    return new DeckError(
      `Deck with id "${deckId}" wasn't found`,
      `DeckNotFoundError`
    )
  }

  static deckIsNotFilled (deck: Deck) {
    return new DeckError(
      `Deck with id "${deck.id}" isn't totally filled. Actual length is ${deck.cards.length} from ${deck.capacity}`,
      `DeckIsNotFilledError`
    )
  }

  static samePlayer () {
    return new DeckError(`You cannot battle yourself.`, `SamePlayerError`)
  }
}