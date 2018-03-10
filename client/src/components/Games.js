import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Divider,
  Icon,
  Button,
  Table,
  Rating,
  Statistic,
  Loader,
  Dimmer
} from "semantic-ui-react";

const Games = ({ data: { allGames = [], loading } }) => {
  if (loading) {
    return (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  const totalPrice = allGames.reduce((sum, game) => sum + game.price, 0);
  const games = [...allGames];

  return (
    <Container>
      <Header as="h1" textAlign="center">
        <Icon name="game" />The amazing game library
      </Header>
      <Divider />
      <Link to="/create-game">
        <Button primary>Create game</Button>
      </Link>
      <Statistic size="small" floated="right">
        <Statistic.Label>Total price</Statistic.Label>
        <Statistic.Value>$ {totalPrice}</Statistic.Value>
      </Statistic>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Platform</Table.HeaderCell>
            <Table.HeaderCell>Genre</Table.HeaderCell>
            <Table.HeaderCell>Release Year</Table.HeaderCell>
            <Table.HeaderCell>Rating</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {games.sort((a, b) => b.rating - a.rating).map(game => {
            return (
              <Table.Row key={game._id}>
                <Table.Cell>
                  <Link to={`/game/${game._id}`}>{game.title}</Link>
                </Table.Cell>
                <Table.Cell>{game.platform}</Table.Cell>
                <Table.Cell>{game.genre}</Table.Cell>
                <Table.Cell>{game.releaseYear}</Table.Cell>
                <Table.Cell>
                  <Rating
                    disabled
                    icon="star"
                    rating={game.rating}
                    maxRating={5}
                  />
                </Table.Cell>
                <Table.Cell>$ {game.price}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  );
};

export const allGamesQuery = gql`
  query {
    allGames {
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

export default graphql(allGamesQuery)(Games);
