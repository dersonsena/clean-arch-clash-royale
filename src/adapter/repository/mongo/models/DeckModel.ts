import  mongoose, { Schema } from 'mongoose'

export const DeckSchema = new mongoose.Schema({
  cards: [{ _id: Schema.Types.ObjectId, name: String, level: Number, elixir: Number }],
  capacity: Number,
  player: {
    _id: Schema.Types.ObjectId,
    name: String,
    trophy: Number,
    clan: String
   }
});

export const DeckModel = mongoose.model('decks', DeckSchema)