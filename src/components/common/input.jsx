import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        value={value}
        className="form-control"
        id={name}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
