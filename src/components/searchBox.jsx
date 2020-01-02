import React from "react";
import Input from "./common/input";

const SearchBox = ({ value, onChange }) => {
  return (
    <Input
      name="movieSearch"
      value={value}
      placeholder="Search..."
      onChange={e => onChange(e.currentTarget.value)}
    ></Input>
  );
};

export default SearchBox;
