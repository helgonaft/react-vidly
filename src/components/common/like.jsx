import React, { Component } from "react";
import ReactDOM from "react-dom";

// Input: like: boolean
// Output: onClick

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={props.onClick}
    ></i>
  );
};

export default Like;
