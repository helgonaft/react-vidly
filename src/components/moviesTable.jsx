import React, { Component } from "react";
import ReactDOM from "react-dom";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];
  render() {
    const { movies, sortColumn, onDelete, onLike, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        ></TableHeader>
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
                    onClick={() => onLike(movie)}
                    liked={movie.liked}
                  ></Like>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
