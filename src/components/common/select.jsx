import React from "react";

const Select = ({ name, label, optionsArray, error, ...rest }) => {
  let options;
  if (optionsArray.length >= 1) {
    options = optionsArray.map(data => (
      <option key={data._id} value={data._id}>
        {data.name}
      </option>
    ));
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select {...rest} className="form-control" id={name} name={name}>
        {options}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
