export class DeckCapacityExceededError extends Error {
  constructor(capacity: number, provided: number) {
    super(`Deck's capacity is ${capacity} and ${provided} was provided`)
    this.name = 'DeckCapacityExceededError'
  }
}