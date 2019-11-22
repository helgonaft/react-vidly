import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  // generate variable out of props, that are passed to component
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
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

        {pages.map(page => {
          return (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => onPageChange(page)}
              >
                {page}
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

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
