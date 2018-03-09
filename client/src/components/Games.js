import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

const Games = ({ data: { allGames = [], loading } }) => {
  if (loading) {
    return <div>Loading</div>;
  }

  const totalPrice = allGames.reduce((sum, game) => sum + game.price, 0);

  return (
    <div>
      <Link to="/create-game">Create game</Link>
      <p>Total price = {totalPrice}</p>
      <ul>
        {allGames.map(game => {
          return (
            <li key={game._id}>
              <Link to={`/game/${game._id}`}>{game.title}</Link>
              price: {game.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const allGamesQuery = gql`
  query {
    allGames {
      _id
      title
      price
    }
  }
`;

export default graphql(allGamesQuery)(Games);
