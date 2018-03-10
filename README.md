# gamelib

Simple game library using React, GraphQL and MongoDB

**Back-end** using **graphql-yoga** and **mongoose**

Front-end using **React**, **apollo-boost**, **semantic-ui** and **formik**

This is a pet project for studying purposes developed with ☕, 🍺, ❤️, and Oxford comma.

# Downloading and running instructions

## Pre-requisites

1.  Mongodb:<https://www.mongodb.com/> or you can get a free instance on <https://mlab.com/>
2.  Node.js: <https://nodejs.org/en/>
3.  Yarn: <http://yarnpkg.com/> (or you can use npm)
4.  (optional, for deployment) Now: <https://zeit.co/now>

## General

1.  Clone repository

```
git clone https://github.com/acaua/gamelib.git
```

## Server

1.  cd into server folder

```
cd gamelib/server
```

2.  Crete .env file (based on .env.example) and input your mongodb host and credentials

3.  Install dependencies

```
yarn
```

4.  Run in development mode

```
yarn dev
```

Or build it and run

```
yarn build
yarn start
```

5.  Check if it is up and play with graphql playground by acessing <http://localhost:4000/>

    > "All work and no play makes Jack a dull boy"

6.  (optional) Deploy it to Now

For deployment with now your mongodb cannot be local

```
now
```

## Client

1.  cd into client folder

```
cd gamelib/client
```

2.  Crete .env file (based on .env.example) and input your graphql back-end uri. If you're running the server locally, it should be <http://localhost:4000>

3.  Install dependencies

```
yarn
```

4.  Run in development mode

```
yarn start
```

5.  (optional) build it

```
yarn build
```

6.  (optional) Deploy it with now

To deploy with now you cannot use your local graphql back-end server. You can deploy the server with now (see above) and use the url provided by now on the .env file
If your build exceed the now maximum size, you can delete the map file with `rm ./build/static/js/*.map`

```
cd build
now
```

# Enjoy it! :)

# Decisions and rationale

This is a pet project to practice the MERN stack (Mongo, Express, React, Node.js) using graphQL instead of REST (because hipster 😎). The goal of the code is to be simple, concise and easy to understand without sacrificing performance.

The libraries were chosen for being popular, simple, easy to use, with good documentation, and little setup.

* [graphql-yoga](https://github.com/graphcool/graphql-yoga/): simple graphql server implementation on top of Express and Apollo server with minimal setup and sensible defaults.

* [mongoose](http://mongoosejs.com/): de facto ODM standard for using MongoDB with Node.js.

* [Create React App](https://github.com/facebook/create-react-app): React app creation made easy, with no build configuration.

* [react-router](https://github.com/ReactTraining/react-router): de facto standard routing library for React.

* [Apollo boost](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost): "The fastest, easiest way to get started with Apollo Client!" Zero config Apollo client with sensible defaults.

* [formik](https://github.com/jaredpalmer/formik) + [yup](https://github.com/jquense/yup): Simple and easy forms and validation in React "without the tears".

* [Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React): Simple and concise UI lib for React to create beautiful interfaces with ease.

# Next steps / missing features

> Oh, I'm lookin' for my missin' piece  
> I'm lookin' for my missin' piece  
> Hi-dee-ho, here I go  
> lookin' for my missin' piece
>
> _The Missing Piece - Shel Silverstein_

* Create a collection and CRUD for genres and platforms and instead of a string use a reference to it in Games collection

* Use Docker and docker-compose for configuring the enviroment

* Create tests

* Add support for internationalization / i18n

* Implement search in the front-end using Array.filter on the games list
