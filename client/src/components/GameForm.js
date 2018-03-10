import React from "react";
import { Formik } from "formik";
import Yup from "yup";
import { Link } from "react-router-dom";
import { Form, Label, Input, Rating, Grid, Button } from "semantic-ui-react";

const InnerGameForm = ({
  values,
  errors,
  touched,
  handleChange,
  setFieldValue,
  handleBlur,
  handleSubmit,
  isSubmitting,
  cancelRedirectTo
}) => (
  <Form onSubmit={handleSubmit}>
    {console.log(cancelRedirectTo)}
    <Form.Field required error={!!touched.title && !!errors.title}>
      <Input
        name="title"
        placeholder="Title"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
      />
      {touched.title &&
        errors.title && (
          <Label basic color="red" pointing>
            {errors.title}
          </Label>
        )}
    </Form.Field>
    <Form.Field required error={!!touched.platform && !!errors.platform}>
      <Input
        name="platform"
        placeholder="Platform"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.platform}
      />
      {touched.platform &&
        errors.platform && (
          <Label basic color="red" pointing>
            {errors.platform}
          </Label>
        )}
    </Form.Field>
    <Form.Field required error={!!touched.genre && !!errors.genre}>
      <Input
        name="genre"
        placeholder="Genre"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.genre}
      />
      {touched.genre &&
        errors.genre && (
          <Label basic color="red" pointing>
            {errors.genre}
          </Label>
        )}
    </Form.Field>
    <Form.Field required error={!!touched.releaseYear && !!errors.releaseYear}>
      <Input
        name="releaseYear"
        placeholder="Year of release"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.releaseYear}
      />
      {touched.releaseYear &&
        errors.releaseYear && (
          <Label basic color="red" pointing>
            {errors.releaseYear}
          </Label>
        )}
    </Form.Field>
    <Form.Field required error={!!touched.price && !!errors.price}>
      <Input
        name="price"
        placeholder="Price"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.price}
      />
      {touched.price &&
        errors.price && (
          <Label basic color="red" pointing>
            {errors.price}
          </Label>
        )}
    </Form.Field>
    <Grid divided="vertically" verticalAlign="middle">
      <Grid.Row columns={2}>
        <Grid.Column>
          <h4>Rating:</h4>
        </Grid.Column>
        <Grid.Column textAlign="right">
          <Rating
            float="right"
            icon="star"
            rating={values.rating}
            onRate={(e, { rating }) => setFieldValue("rating", rating)}
            maxRating={5}
            size="massive"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid columns={2}>
      <Grid.Column>
        <Link to={cancelRedirectTo}>
          <Button fluid disabled={isSubmitting}>
            Cancel
          </Button>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Button primary fluid type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </Grid.Column>
    </Grid>
  </Form>
);

const GameForm = ({ game, onSubmit, cancelRedirectTo }) => (
  <Formik
    initialValues={game}
    validationSchema={Yup.object().shape({
      title: Yup.string().required(),
      platform: Yup.string().required(),
      genre: Yup.string().required(),
      releaseYear: Yup.number()
        .required()
        .positive()
        .integer(),
      rating: Yup.number()
        .required()
        .min(0)
        .max(5)
        .integer(),
      price: Yup.number()
        .required()
        .positive()
    })}
    onSubmit={onSubmit}
    render={props => (
      <InnerGameForm {...props} cancelRedirectTo={cancelRedirectTo} />
    )}
  />
);

export default GameForm;
