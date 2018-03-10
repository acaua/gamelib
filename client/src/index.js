import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "semantic-ui-css/semantic.min.css";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

const ApolloApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp, document.getElementById("root"));
registerServiceWorker();
