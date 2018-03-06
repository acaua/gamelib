import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";

import { DB_HOST, DB_USER, DB_PASS } from "babel-dotenv";

import typeDefs from "./schema";
import resolvers from "./resolvers";

import Game from "./models/Game";

const dbstring = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}`;

mongoose.connect(dbstring).then(
  () => {
    const options = { port: 4000 };
    const server = new GraphQLServer({
      typeDefs,
      resolvers,
      context: { Game }
    });
    server.start(options, () =>
      console.log("Server is running on localhost:" + options.port)
    );
  },
  err => {
    console.error("Cannot connect to db", err);
  }
);
