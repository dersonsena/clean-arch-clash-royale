import './config/module-alias'
import { DeckRepositoryMemory } from "@/adapters/repository/memory/DeckRepositoryMemory"
import { CreateDeck } from "@/domain/usecase/CreateDeck"
import { Card } from '@/domain/entity/deck';

(async function () {
  const deckRepository = new DeckRepositoryMemory();
  const createDeck = new CreateDeck(deckRepository)
  const deckData = await createDeck.execute({
    capacity: 8,
    player: {
      name: 'Kilderson Sena',
      trophy: 150,
      clan: 'Xpto Clan'
    },
    cards: [
      new Card({ name: 'Ice Spirit', level: 6, elixir: 1 }),
      new Card({ name: 'Tesla', level: 8, elixir: 4 }),
      new Card({ name: 'Wizard', level: 6, elixir: 5 }),
      new Card({ name: 'Valkyrie', level: 5, elixir: 4 }),
      new Card({ name: 'Arrows', level: 7, elixir: 3 }),
      new Card({ name: 'Balloon', level: 5, elixir: 5 }),
      new Card({ name: 'Guards', level: 7, elixir: 3 }),
      new Card({ name: 'Fireball', level: 9, elixir: 4 }),
    ]
  })
  
  console.log(deckData)
})();