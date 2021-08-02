import { CardError } from "../../error"

export class Card {
  private id?: number|string
  private name: string
  private level: number
  private elixir: number

  constructor({ id, name, level, elixir }: Card.Params) {
    if (level < 1 || level > 13) throw CardError.levelLimitExcedeed(name, level)
    if (elixir < 1 || elixir > 9) throw CardError.elixirLimitExcedeed(name, level)
    this.id = id
    this.name = name
    this.level = level
    this.elixir = elixir
  }

  getId (): number|string|undefined {
    return this.id
  }

  setId (value: number | string) {
    this.id = value
  }

  getElixir ():number {
    return this.elixir
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