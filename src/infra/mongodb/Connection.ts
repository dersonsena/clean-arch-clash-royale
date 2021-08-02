import mongoose from "mongoose";

export class Connection {
  static async connectMongo () {
    const mongoDb = await mongoose.connect('mongodb://localhost:27017/clash_royale', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    mongoDb.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoDb.connection.once('open', function() {
      console.log('MongoDB Connected!')
    });
  }
}