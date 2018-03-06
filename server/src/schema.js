export default `
type Game {
  _id: String!
  title: String!
  platform: String!
  genre: String!
  releaseYear: Int!
  rating: Int!
  price: Float!
}

type Query {
  allGames: [Game!]!

  game(_id: String!): Game
}

type Mutation {
  createGame(
    title: String!,
    platform: String!,
    genre: String!,
    releaseYear: Int!,
    rating: Int!,
    price: Float!
  ): Game

  updateGame(
    _id: String!
    title: String,
    platform: String,
    genre: String,
    releaseYear: Int,
    rating: Int,
    price: Float
  ): Game

  deleteGame(
    _id: String!
  ): Boolean!
}
`;
