import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  console.log(pageCount);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li> */}
        {pages.map((page, index) => {
          return (
            <li className="page-item" key={index}>
              <a className="page-link" href="#">
                {index + 1}
              </a>
            </li>
          );
        })}

        {/* <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Pagination;
