import mongoose from 'mongoose'
import { MongoOrm } from "@/adapter/contracts";
import { DeckModel } from "./models";

export class MongooseAdapter implements MongoOrm {
  async findById(id: string | number): Promise<object> {
    return DeckModel.findById(id).exec()
  }

  async insert(values: object): Promise<object> {
    const deckModel = new DeckModel(values)
    const deckDocument = await deckModel.save()
    return deckDocument;
  }

  generateId(): string {
    return mongoose.Types.ObjectId().toString()
  }
}