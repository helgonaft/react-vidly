import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    return (
      <tbody>
        {this.props.data.map((item, index) => {
          return (
            <tr key={index}>
              {this.props.columns.map(column => (
                <td key={this.createKey(item, column)}>
                  {this.renderCell(item, column)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
