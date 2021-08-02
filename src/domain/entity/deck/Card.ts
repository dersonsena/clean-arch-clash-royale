import { CardError } from "../../error"

export class Card {
  readonly id?: number|string
  readonly name: string
  readonly level: number
  readonly elixir: number

  constructor({ id, name, level, elixir }: Card.Params) {
    if (level < 1 || level > 13) throw CardError.levelLimitExcedeed(name, level)
    if (elixir < 1 || elixir > 9) throw CardError.elixirLimitExcedeed(name, level)
    this.id = id
    this.name = name
    this.level = level
    this.elixir = elixir
  }
}

export namespace Card {
  export type Params = {
    id?: number | string
    name: string
    level: number
    elixir: number
  }
}