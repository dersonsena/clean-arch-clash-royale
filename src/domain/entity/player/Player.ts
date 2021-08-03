export class Player {
  private id?: number | string
  private name: string
  private trophy: number
  private clan: string

  constructor ({ id, name, trophy, clan }: Player.Params) {
    this.id = id
    this.name = name
    this.trophy = trophy
    this.clan = clan
  }

  getId (): number | string | undefined {
    return this.id
  }

  setId (value: number | string) {
    this.id = value
  }

  getName (): string {
    return this.name
  }

  getTrophy (): number {
    return this.trophy
  }

  getClan (): string {
    return this.clan
  }

  increaseTrophy (value: number) {
    this.trophy += value
  }

  decreaseTrophy (value: number) {
    this.trophy -= value
  }
}

export namespace Player {
  export type Params = {
    id?: number|string
    name: string,
    trophy: number,
    clan: string
  }
}