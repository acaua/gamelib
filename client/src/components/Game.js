import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  Rating,
  Segment,
  Header,
  Grid
} from "semantic-ui-react";

import { allGamesQuery } from "./Games";

class Game extends Component {
  state = { deleteConfirmationOpen: false };

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
      <Grid container centered columns={2}>
        <Grid.Column>
          <Segment>
            <Header as="h1">{game.title}</Header>
            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Platform</Table.Cell>
                  <Table.Cell>{game.platform}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Genre</Table.Cell>
                  <Table.Cell>{game.genre}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Year of release</Table.Cell>
                  <Table.Cell>{game.releaseYear}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Price</Table.Cell>
                  <Table.Cell>{game.price}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Rating</Table.Cell>
                  <Table.Cell>
                    <Rating
                      disabled
                      icon="star"
                      rating={game.rating}
                      maxRating={5}
                    />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Grid columns={2}>
              <Grid.Column>
                <Button negative fluid onClick={this.handleClickDelete}>
                  Delete
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button
                  primary
                  fluid
                  onClick={() =>
                    this.props.history.push(`/game/edit/${game._id}`)
                  }
                >
                  Edit
                </Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Link to={"/"}>Back</Link>
        </Grid.Column>
      </Grid>
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
