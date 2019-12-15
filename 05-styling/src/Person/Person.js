import React from 'react'; 
import styled from 'styled-components';
import classes from './Person.module.css';

const StyledDiv = styled.div`
  width: 60%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid blue;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => { 
  return (
    <StyledDiv>
      <p className={classes.test} onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
}

export default person;

