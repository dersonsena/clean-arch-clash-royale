export class Player {
  readonly name: string
  readonly trophy: number
  readonly clan: string

  constructor ({ name, trophy, clan }: Player.Params) {
    this.name = name
    this.trophy = trophy
    this.clan = clan
  }
}

export namespace Player {
  export type Params = {
    name: string,
    trophy: number,
    clan: string
  }
}