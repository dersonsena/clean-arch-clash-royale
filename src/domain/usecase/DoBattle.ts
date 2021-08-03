import { Deck } from "../entity/deck";
import { DeckError } from "../error";
import { BattleError } from "../error/BattleError";
import { DeckRepository } from "../repository";

export class DoBattle {
  readonly POINTS_PER_VICTORY = 30
  readonly POINTS_PER_DEFEAT = 30
  readonly JUSTICE_METRIC = 800

  constructor(
    private readonly deckRepository: DeckRepository
  ) {}

  async execute(inputData: DoBattle.InputData): Promise<DoBattle.OutputData> {
    if (inputData.deckPlayer1Id === inputData.deckPlayer2Id) throw DeckError.samePlayer()

    const deck1 = await this.deckRepository.getById(inputData.deckPlayer1Id)
    const deck2 = await this.deckRepository.getById(inputData.deckPlayer2Id)

    if (!deck1.isTotallyFilled()) throw DeckError.deckIsNotFilled(deck1)
    if (!deck2.isTotallyFilled()) throw DeckError.deckIsNotFilled(deck2)

    if ((deck1.player.getTrophy() - deck2.player.getTrophy()) > this.JUSTICE_METRIC)
      throw BattleError.unfairBattle(deck1, deck2)

    const playerList: Deck[] = [deck1, deck2]
    const winnerIndex = Math.floor(Math.random() * playerList.length)
    const loserIndex = winnerIndex === 0 ? 1 : 0;

    playerList[winnerIndex].player.increaseTrophy(this.POINTS_PER_VICTORY)
    playerList[loserIndex].player.decreaseTrophy(this.POINTS_PER_DEFEAT)

    return {
      winner: {
        name: playerList[winnerIndex].player.getName(),
        trophy: playerList[winnerIndex].player.getTrophy()
      },
      loser: {
        name: playerList[loserIndex].player.getName(),
        trophy: playerList[loserIndex].player.getTrophy()
      }
    }
  }
}

export namespace DoBattle {
  export type InputData = {
    deckPlayer1Id: number|string,
    deckPlayer2Id: number|string
  }

  export type OutputData = {
    winner: PlayerModel,
    loser: PlayerModel, 
  }

  export type PlayerModel = {
    name: string
    trophy: number
  }
}