import { CardLevelLimitExcedeedError } from "../error"

export class Card {
  readonly name: string
  readonly level: number
  readonly elixir: number

  constructor({ name, level, elixir }: Card.Params) {
    if (level < 0 || level > 13) throw new CardLevelLimitExcedeedError(name, level)
    this.name = name
    this.level = level
    this.elixir = elixir
  }
}

export namespace Card {
  export type Params = {
    name: string
    level: number
    elixir: number
  }
}