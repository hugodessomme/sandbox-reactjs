import React from 'react';

const userInput = (props) => {
  const style = {
    width: '100%',
    height: '50px',
    marginBottom: '10px',
    padding: '5px 10px',
    border: '2px solid blue',
    fontSize: '20px'
  };

  return <input style={style} type="text" value={props.username} onChange={props.change} />;
}

export default userInput;