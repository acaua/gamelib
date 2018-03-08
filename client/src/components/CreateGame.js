import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import GameForm from "./GameForm";

class CreateGame extends Component {
  game = {
    title: "title27",
    platform: "plat1",
    genre: "genre1",
    releaseYear: 2001,
    rating: 2,
    price: 20
  };

  onSubmit(values, { setSubmitting, setErrors }) {
    this.props.mutate({ variables: values }).then(
      response => {
        setSubmitting(false);
        this.props.history.push("/");
      },
      error => {
        setSubmitting(false);
        setErrors(error);
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Create Game ...</h1>
        <GameForm game={this.game} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

const createGameMutation = gql`
  mutation(
    $title: String!
    $platform: String!
    $genre: String!
    $releaseYear: Int!
    $rating: Int!
    $price: Float!
  ) {
    createGame(
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

export default graphql(createGameMutation, {
  options: { refetchQueries: ["allGames"] }
})(CreateGame);
