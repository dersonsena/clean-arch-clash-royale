import './config/module-alias'
import { DeckRepositoryMemory } from "@/adapter/repository/memory/DeckRepositoryMemory"
import { CreateDeck } from "@/domain/usecase/CreateDeck"
import { deckInputs } from '@/data-source'
import { DoBattle } from '@/domain/usecase';
import { DeckRepositoryMongo } from '@/adapter/repository/mongo';
import { Connection, MongooseAdapter } from '@/infra/mongodb';
//import { app } from './config/app';
import { expressApp } from '@/infra/http'
import { hapiApp } from '@/infra/http'

// docker run --name mongo-clash-royale -p 27017:27017 -d mongo:latest

// Express Application
expressApp.listen(5000, () => console.log(`Express Server running at http://localhost:5000`))
hapiApp.start().then(() => console.log(`Hapi Server running at http://localhost:5001`))

// // In Memory
// const deckRepositoryMemory = new DeckRepositoryMemory();

// // In MongoDB
// const mongoOrm = new MongooseAdapter()
// const deckRepositoryMongo = new DeckRepositoryMongo(mongoOrm);

// (async function () {
//   await Connection.connectMongo()

//   console.log("====== DECKS ======");
//   for (let input of deckInputs) {
//     const createDeck = new CreateDeck(deckRepositoryMemory)
//     const deckData = await createDeck.execute(input)
//     console.log(deckData)
//   }

//   console.log("====== BATTLE TIME !! ======");
//   const battle = new DoBattle(deckRepositoryMemory)
//   const battleResult = await battle.execute({
//     deckPlayer1Id: 2,
//     deckPlayer2Id: 3
//   })
  
//   console.log(battleResult)
// })()