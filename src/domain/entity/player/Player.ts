export class Player {
  private name: string
  private trophy: number
  private clan: string

  constructor ({ name, trophy, clan }: Player.Params) {
    this.name = name
    this.trophy = trophy
    this.clan = clan
  }

  getName (): string {
    return this.name
  }

  getTrophy (): number {
    return this.trophy
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
    name: string,
    trophy: number,
    clan: string
  }
}