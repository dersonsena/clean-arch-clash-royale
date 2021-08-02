import './config/module-alias'
import { DeckRepositoryMemory } from "@/adapters/repository/memory/DeckRepositoryMemory"
import { CreateDeck } from "@/domain/usecase/CreateDeck"
import { deckInputs } from '@/data-source'
import { DoBattle } from '@/domain/usecase';

const deckRepository = new DeckRepositoryMemory();

(async function () {
  console.log("====== DECKS ======");
  for (let input of deckInputs) {
    const createDeck = new CreateDeck(deckRepository)
    const deckData = await createDeck.execute(input)
    console.log(deckData);
    
  }
  console.log("====== BATTLE TIME !! ======");

  const battle = new DoBattle(deckRepository)
  const battleResult = await battle.execute({ deckPlayer1Id: 1, deckPlayer2Id: 2 })
  
  console.log(battleResult)
})()