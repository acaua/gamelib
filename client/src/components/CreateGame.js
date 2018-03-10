import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { Container, Segment, Grid } from "semantic-ui-react";

import GameForm from "./GameForm";
import { allGamesQuery } from "./Games";

class CreateGame extends Component {
  game = {
    title: "",
    platform: "",
    genre: "",
    releaseYear: "",
    rating: 0,
    price: ""
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
      <Grid container centered columns={2}>
        <Grid.Column>
          <h1>Create a new game</h1>
          <Segment>
            <GameForm
              cancelRedirectTo={"/"}
              game={this.game}
              onSubmit={this.onSubmit.bind(this)}
            />
          </Segment>
        </Grid.Column>
      </Grid>
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
  options: { refetchQueries: [{ query: allGamesQuery }] }
})(CreateGame);
