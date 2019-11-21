import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };

  handleDelete = movie => {
    deleteMovie(movie._id);
    this.setState({ movies: getMovies() });
  };

  handleMessage = () => {
    const count = this.state.movies.length;
    let begining = "There are no";
    if (count > 0) {
      begining = `Showing ${count}`;
    }
    return <span>{begining + " movies in the database"}</span>;
  };

  handleLike = movie => {
    const movies = this.state.movies.map(m => {
      if (m._id === movie._id) {
        m.liked = !m.liked;
      }
      return m;
    });
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    // variable count = length property of movies object
    const { length: count } = this.state.movies;
    const { pageSize, currentPage } = this.state;
    const movies = paginate(this.state.movies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>{this.handleMessage()}</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      onClick={() => this.handleLike(movie)}
                      liked={movie.liked}
                    ></Like>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={this.handleDelete.bind(this, movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        ></Pagination>
      </React.Fragment>
    );
  }
}

export default Movies;
