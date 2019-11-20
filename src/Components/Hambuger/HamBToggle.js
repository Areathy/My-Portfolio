import React from 'react';

const HamBToggle = props => (
    <button className = 'hm-button' onClick={props.click}>
      <div className = 'hm-lines' />
      <div className = 'hm-lines' />
      <div className = 'hm-lines' />
    </button>
  );

export default HamBToggle;