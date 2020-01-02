import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./searchBox";

class Movies extends Component {
  state = {
    movies: [],
    filteredMovies: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
    searchQuery: ""
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), filteredMovies: getMovies(), genres });
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1, selectedGenre: null });
    const filteredMovies = this.state.movies.filter(m => {
      if (m.title.toLowerCase().includes(query.toLowerCase())) {
        return m;
      }
    });
    this.setState({ filteredMovies });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      filteredMovies: allMovies,
      sortColumn
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    // orderBy takes 3 args: items, sort by what (it can be array), sort order (can be array)
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    // variable count = length property of movies object
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: movies } = this.getPageData();
    return (
      <React.Fragment>
        <p>{this.handleMessage(totalCount)}</p>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              onGenreSelect={this.handleGenreFilter}
              selectedGenre={this.state.selectedGenre}
            ></ListGroup>
          </div>
          <div className="col">
            <Link
              to="/movies/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
            <SearchBox
              value={searchQuery}
              onChange={this.handleSearch}
            ></SearchBox>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            ></MoviesTable>
            <Pagination
              itemsCount={totalCount}
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
