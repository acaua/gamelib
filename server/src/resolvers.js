export default {
  Query: {
    allGames: async (parent, args, { Game }) => {
      const games = await Game.find();
      return games.map(game => {
        game._id = game._id.toString();
        return game;
      });
    },

    game: async (parent, { _id }, { Game }) => {
      const game = await Game.findById(_id);
      if (!game) {
        throw new Error(`Cannot find user with id = ${_id}`);
      }
      game._id = game._id.toString();

      return game;
    }
  },

  Mutation: {
    createGame: async (parent, args, { Game }) => {
      const game = await new Game(args).save();
      game._id = game._id.toString();
      return game;
    },

    updateGame: async (parent, args, { Game }) => {
      const game = await Game.findByIdAndUpdate(args._id, args);
      if (!game) {
        throw new Error(`Cannot update user with id = ${id}`);
      }
      game._id = game._id.toString();

      return game;
    },

    deleteGame: async (parent, { _id }, { Game }) => {
      const game = await Game.findByIdAndRemove(_id);

      return game ? true : false;
    }
  }
};
