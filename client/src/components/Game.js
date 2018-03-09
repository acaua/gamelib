import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

const Game = ({ data: { game = [], loading } }) => {
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <ul>
        <p> title: {game.title} </p>
        <p> platform: {game.platform} </p>
        <p> genre: {game.genre} </p>
        <p> releaseYear: {game.releaseYear} </p>
        <p> rating: {game.rating} </p>
        <p> price: {game.price} </p>
      </ul>
      <Link to={`/game/edit/${game._id}`}>Edit game</Link>
    </div>
  );
};

export const gameQuery = gql`
  query($_id: String!) {
    game(_id: $_id) {
      _id
      title
      platform
      genre
      releaseYear
      rating
      price
    }
  }
`;

export default graphql(gameQuery, {
  options: ({ match: { params: { _id } } }) => ({ variables: { _id } })
})(Game);
