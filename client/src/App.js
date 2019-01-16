import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch'
import wolf from './wolf.svg';
import './App.css';


const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <nav className="display-4 navbar navbar-expand-lg navbar-dark bg-primary">SpaceX Launches</nav>
      <Router>
      <div className="jumbotron">
        <img src={wolf} alt="SpaceX" style={{width: 200, display: 'block', margin: 'auto'}} />
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
      </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
