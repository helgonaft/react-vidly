import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NavBar from './components/common/navBar';
import Home from './components/home';
import NotFound from './components/notFound';
import MovieDetails from './components/movieDetails';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route
            path="/movies/:id"
            render={props => <MovieDetails {...props} />}
          ></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment >
  );
}

export default App;
