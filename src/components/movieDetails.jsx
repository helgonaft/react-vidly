import React, { Component } from "react";

class MovieDetails extends Component {
  state = {};
  handleSaveClick = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1>Movie Form {this.props.match.params.id}</h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.handleSaveClick}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
