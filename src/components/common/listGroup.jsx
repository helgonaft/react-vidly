import React from "react";

const ListGroup = props => {
  const { items, textProperty, valueProperty, selectedGenre } = props;
  return (
    <ul className="list-group">
      {items.map((genre, index) => {
        return (
          <li
            className={
              selectedGenre === genre
                ? "list-group-item active clickable"
                : "list-group-item clickable"
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
