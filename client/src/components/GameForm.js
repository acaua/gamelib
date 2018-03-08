import React from "react";
import { Formik, Field, Form } from "formik";
import Yup from "yup";

const InnerGameForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <Form>
    <Field type="text" name="title" />
    {touched.title && errors.title && <div>{errors.title}</div>}
    <Field type="text" name="platform" />
    {touched.platform && errors.platform && <div>{errors.platform}</div>}
    <Field type="text" name="genre" />
    {touched.genre && errors.genre && <div>{errors.genre}</div>}
    <Field type="text" name="releaseYear" />
    {touched.releaseYear &&
      errors.releaseYear && <div>{errors.releaseYear}</div>}
    <Field type="text" name="rating" />
    {touched.rating && errors.rating && <div>{errors.rating}</div>}
    <Field type="text" name="price" />
    {touched.price && errors.price && <div>{errors.price}</div>}
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
);

const GameForm = ({ game, onSubmit }) => (
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
    component={InnerGameForm}
  />
);

export default GameForm;
