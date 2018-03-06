import mongoose from "mongoose";

var GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 5, required: true },
  price: { type: Number, required: true }
});

const Game = mongoose.model("Game", GameSchema);

export default Game;
