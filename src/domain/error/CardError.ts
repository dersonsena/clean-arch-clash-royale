import { DomainError } from "./DomainError"

export class CardError extends DomainError {
  static levelLimitExcedeed(name: string, level: number) {
    return new CardError(
      `Card level named by "${name}" must be between 1 and 13,
      ${level} was provided`, 'CardLevelLimitExcedeedError'
    )
  }

  static elixirLimitExcedeed(name: string, level: number) {
    return new CardError(
      `Card elixir named by "${name}" must be between 1 and 9,
      ${level} was provided`, 'CardElixirLimitExcedeedError'
    )
  }
}