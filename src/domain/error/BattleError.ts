import { Deck } from "../entity/deck";
import { DomainError } from "./DomainError";

export class BattleError extends DomainError {
  static unfairBattle(deck1: Deck, deck2: Deck) {
    return new BattleError(
      `Unfair battle between player "${deck1.player.getName()}:${deck1.player.getTrophy()}" and "${deck2.player.getName()}:${deck2.player.getTrophy()}"`,
      'UnfairBattleError'
    )
  }
}