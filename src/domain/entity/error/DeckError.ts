import { DomainError } from "./DomainError"

export class DeckError extends DomainError {
  static capacityExeceeded(capacity: number, provided: number) {
    return new DeckError(
      `Deck's capacity is ${capacity} and ${provided} was provided`,
      `DeckCapacityExceededError`
    )
  }
}