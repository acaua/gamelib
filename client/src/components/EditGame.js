import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";
import { Segment, Grid } from "semantic-ui-react";

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
      <Grid container centered columns={2}>
        <Grid.Column>
          <h1>Create a new game</h1>
          <Segment>
            <h1>Edit game</h1>
            <GameForm
              game={game}
              cancelRedirectTo={`/game/${game._id}`}
              onSubmit={this.onSubmit.bind(this)}
            />
          </Segment>
        </Grid.Column>
      </Grid>
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
