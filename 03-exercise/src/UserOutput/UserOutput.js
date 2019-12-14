import React from 'react';
import './UserOutput.css';

const userOutput = (props) => (
  <div className="UserOutput">
    <p>{props.username}</p>
    <p>Ipsum</p>
  </div>
);

export default userOutput;