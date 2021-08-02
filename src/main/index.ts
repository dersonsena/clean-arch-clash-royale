import './config/module-alias'
import { DeckRepositoryMemory } from "@/adapters/repository/memory/DeckRepositoryMemory"
import { CreateDeck } from "@/domain/usecase/CreateDeck"
import { deckInputs } from '@/data-source'
import { CreateBattle } from '@/domain/usecase';

const deckRepository = new DeckRepositoryMemory();

(async function () {
  for (let input of deckInputs) {
    const createDeck = new CreateDeck(deckRepository)
    const deckData = await createDeck.execute(input)
  }

  const battle = new CreateBattle(deckRepository)
  const battleResult = await battle.execute({ deckPlayer1Id: 1, deckPlayer2Id: 2 })
  
  console.log(battleResult)
})()