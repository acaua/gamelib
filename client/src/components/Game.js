import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";
import { Link } from "react-router-dom";

import { allGamesQuery } from "./Games";

class Game extends Component {
  handleClickDelete = () => {
    const _id = this.props.data.game._id;

    this.props.mutate({ variables: { _id } }).then(response => {
      this.props.history.push("/");
    });
  };

  render() {
    const { data: { game = [], loading } } = this.props;

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
        <button onClick={this.handleClickDelete}>Delete game</button>
      </div>
    );
  }
}

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

const deleteGameMutation = gql`
  mutation($_id: String!) {
    deleteGame(_id: $_id)
  }
`;

export default compose(
  graphql(gameQuery, {
    options: ({ match: { params: { _id } } }) => ({ variables: { _id } })
  }),
  graphql(deleteGameMutation, {
    options: ({ match: { params: { _id } } }) => ({
      refetchQueries: [{ query: allGamesQuery }]
    })
  })
)(Game);
