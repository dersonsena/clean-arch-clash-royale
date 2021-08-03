import { Card } from '@/domain/entity/deck';
import { Player } from '@/domain/entity/player';
import { DeckRepository } from '@/domain/repository';

export class CreateDeck {
  constructor(
    private readonly deckRepository: DeckRepository
  ) {}

  async execute(inputData: CreateDeck.InputData): Promise<CreateDeck.OutputData> {
    const cards = inputData.cards.map((card: CreateDeck.CardModel) => new Card({
      id: card.id,
      name: card.name,
      level: card.level,
      elixir: card.elixir
    }))

    const player = new Player({
      id: inputData.player.id,
      name: inputData.player.name,
      trophy: inputData.player.trophy,
      clan: inputData.player.clan
    })

    const deck = await this.deckRepository.create(player, cards, inputData.capacity);

    return {
      id: deck.id || '',
      player: {
        id: player.getId() || '',
        name: player.getName(),
        trophy: player.getTrophy(),
        clan: player.getClan()
      },
      elixirAverage: deck.average()
    }
  }
}

export namespace CreateDeck {
  export type InputData = {
    cards: CardModel[]
    player: PlayerModel
    capacity: number
  }

  export type OutputData = {
    id: number | string,
    player: PlayerModel
    elixirAverage: number
  }

  export type CardModel = {
    id: number|string
    name: string
    level: number
    elixir: number
  }

  export type PlayerModel = {
    id: number | string
    name: string
    trophy: number
    clan: string
  }
}