import React from 'react';

const ValueToggle = ({ prop, value, onChange, ...props }) => {
  return (
    <div>
      <label>{ prop }: </label>
      <input 
        type="checkbox"
        checked={ value }
        onChange={onChange}
      />
    </div>
  )
}

export default ValueToggle;