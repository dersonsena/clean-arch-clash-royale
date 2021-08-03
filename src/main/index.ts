import './config/module-alias'
import { Connection } from '@/infra/mongodb';
import { expressApp } from '@/infra/http'
import { hapiApp } from '@/infra/http'

// docker run --name mongo-clash-royale -p 27017:27017 -d mongo:latest

Connection.connectMongo().then(() => {
  expressApp.listen(5000, () => console.log(`Express Server running at http://localhost:5000`))
  hapiApp.start().then(() => console.log(`Hapi Server running at http://localhost:5001`))
})

// (async function () {
//   console.log("====== BATTLE TIME !! ======");
//   const battle = new DoBattle(deckRepositoryMemory)
//   const battleResult = await battle.execute({
//     deckPlayer1Id: 2,
//     deckPlayer2Id: 3
//   })
  
//   console.log(battleResult)
// })()