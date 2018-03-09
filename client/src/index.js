import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://server-ibvtokovfi.now.sh/"
});

const ApolloApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp, document.getElementById("root"));
registerServiceWorker();
