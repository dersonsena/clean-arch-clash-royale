import { DeckRepository } from "../repository";

export class CreateBattle {
  constructor(
    private readonly deckRepository: DeckRepository
  ) {}

  async execute(inputData: CreateBattle.InputData) {
    const deck1 = await this.deckRepository.getById(inputData.deckPlayer1Id)
    const deck2 = await this.deckRepository.getById(inputData.deckPlayer2Id)

    console.log({deck1, deck2})
  }
}

export namespace CreateBattle {
  export type InputData = {
    deckPlayer1Id: number,
    deckPlayer2Id: number
  }
}