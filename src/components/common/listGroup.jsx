import React, { Component } from "react";
import ReactDOM from "react-dom";
import { getGenres } from "../../services/fakeGenreService";

const ListGroup = props => {
  const { items, textProperty, valueProperty, selectedGenre } = props;
  return (
    <ul className="list-group">
      {items.map((genre, index) => {
        return (
          <li
            className={
              selectedGenre === genre
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => props.onGenreSelect(genre)}
          >
            {genre[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
