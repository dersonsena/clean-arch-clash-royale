import './config/module-alias'
import { DeckRepositoryMemory } from "@/adapter/repository/memory/DeckRepositoryMemory"
import { CreateDeck } from "@/domain/usecase/CreateDeck"
import { deckInputs } from '@/data-source'
import { DoBattle } from '@/domain/usecase';
import { DeckRepositoryMongo } from '@/adapter/repository/mongo';
import { Connection, MongooseAdapter } from '@/infra/mongodb';

// docker run --name mongo-clash-royale -p 27017:27017 -d mongo:latest

// In Memory
const deckRepositoryMemory = new DeckRepositoryMemory();

// In MongoDB
const mongoOrm = new MongooseAdapter()
const deckRepositoryMongo = new DeckRepositoryMongo(mongoOrm);

(async function () {
  await Connection.connectMongo()

  console.log("====== DECKS ======");
  for (let input of deckInputs) {
    const createDeck = new CreateDeck(deckRepositoryMongo)
    const deckData = await createDeck.execute(input)
    console.log(deckData)
  }

  console.log("====== BATTLE TIME !! ======");
  const battle = new DoBattle(deckRepositoryMongo)
  const battleResult = await battle.execute({
    deckPlayer1Id: '61087247295f5a10c33558e0',
    deckPlayer2Id: '61087247295f5a10c33558eb'
  })
  
  console.log(battleResult)
})()