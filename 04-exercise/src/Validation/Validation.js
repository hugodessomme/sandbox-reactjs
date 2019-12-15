import React from 'react';

const validation = (props) => {
  let isLongEnough = 'Text too short';

  if (props.valueLength > 5) {
    isLongEnough = 'Text long enough';
  }

  return <p>{isLongEnough}</p>
};

export default validation;