import './config/module-alias'
import { DeckRepositoryMemory } from "@/adapters/repository/memory/DeckRepositoryMemory"
import { CreateDeck } from "@/domain/usecase/CreateDeck"
import { deckInputs } from '@/data-source'

const deckRepository = new DeckRepositoryMemory();

deckInputs.forEach(async inputData => {
  const createDeck = new CreateDeck(deckRepository)
  const deckData = await createDeck.execute(inputData)
  console.log(deckData)
})