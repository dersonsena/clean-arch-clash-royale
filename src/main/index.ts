import './config/module-alias'
import { DeckRepositoryMemory } from "@/adapter/repository/memory/DeckRepositoryMemory"
import { CreateDeck } from "@/domain/usecase/CreateDeck"
import { deckInputs } from '@/data-source'
import { DoBattle } from '@/domain/usecase';
import { DeckRepositoryMongo } from '@/adapter/repository/mongo';
import { Connection } from '@/infra/mongodb';

// docker run --name mongo-clash-royale -p 27017:27017 -d mongo:latest

const deckRepositoryMemory = new DeckRepositoryMemory();
const deckRepositoryMongo = new DeckRepositoryMongo();

(async function () {
  await Connection.connectMongo()

  console.log("====== DECKS ======");
  for (let input of deckInputs) {
    const createDeck = new CreateDeck(deckRepositoryMemory)
    const deckData = await createDeck.execute(input)
    console.log(deckData)
  }

  console.log("====== BATTLE TIME !! ======");
  const battle = new DoBattle(deckRepositoryMemory)
  const battleResult = await battle.execute({
    deckPlayer1Id: 1,
    deckPlayer2Id: 2
  })
  
  console.log(battleResult)
})()