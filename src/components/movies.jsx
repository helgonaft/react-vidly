import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    genres: []
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    deleteMovie(movie._id);
    this.setState({ movies: getMovies() });
  };

  handleMessage = count => {
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

  handleGenreFilter = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    // const movies = filter(this.state.movies, this.state.selectedGenre);
    // this.setState({ movies });
  };

  render() {
    // variable count = length property of movies object
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>{this.handleMessage(filtered.length)}</p>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              onGenreSelect={this.handleGenreFilter}
              selectedGenre={this.state.selectedGenre}
            ></ListGroup>
          </div>
          <div className="col">
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
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            ></Pagination>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
