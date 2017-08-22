import React from 'react';

const ValueEditor = ({prop, value, onChange, ...props }) => {
  return (  
    <div>
      <label>{prop}: </label>
      <input
        type="value"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default ValueEditor;