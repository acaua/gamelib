import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

const Games = ({ data: { allGames = [], loading } }) => {
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Link to="/create-game">Create game</Link>
      <ul>
        {allGames.map(game => {
          return (
            <li key={game._id}>
              <p> {game.title} </p>
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
    }
  }
`;

export default graphql(allGamesQuery)(Games);
