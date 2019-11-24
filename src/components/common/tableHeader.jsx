import React, { Component } from "react";

// interface of the component:
// columns: array
// sortColumn: object
// onSort: function

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    // raise sort event
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => {
            return (
              <th
                key={column.path || column.key}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
