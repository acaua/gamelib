import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";

import GameForm from "./GameForm";
import { gameQuery } from "./Game";

class EditGame extends Component {
  onSubmit(values, { setSubmitting, setErrors }) {
    const _id = this.props.data.game._id;

    this.props.mutate({ variables: { _id, ...values } }).then(
      response => {
        setSubmitting(false);
        this.props.history.push(`/game/${_id}`);
      },
      error => {
        setSubmitting(false);
        setErrors(error);
      }
    );
  }

  render() {
    const { data: { game = [], loading } } = this.props;

    if (loading) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h1>Update Game ...</h1>
        <GameForm game={game} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

const updateGameMutation = gql`
  mutation(
    $_id: String!
    $title: String
    $platform: String
    $genre: String
    $releaseYear: Int
    $rating: Int
    $price: Float
  ) {
    updateGame(
      _id: $_id
      title: $title
      platform: $platform
      genre: $genre
      releaseYear: $releaseYear
      rating: $rating
      price: $price
    ) {
      _id
    }
  }
`;

export default compose(
  graphql(gameQuery, {
    options: ({ match: { params: { _id } } }) => ({ variables: { _id } })
  }),
  graphql(updateGameMutation, {
    options: ({ match: { params: { _id } } }) => ({
      refetchQueries: [
        {
          query: gameQuery,
          variables: { _id }
        }
      ]
    })
  })
)(EditGame);
