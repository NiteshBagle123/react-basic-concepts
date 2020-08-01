import React from 'react';
import styled from 'styled-components';
import './Cockpit.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt && true ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt && true ? 'salmon' : 'green'};
    color: black
  }
`;

const cockpit = props => {
    let classes = [];
    if(props.persons.length <= 2){
      classes.push('red');
    }

    if(props.persons.length <=1){
      classes.push('bold');
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <StyledButton 
                alt={props.showPerson.toString()} 
                onClick={props.togglePerson}>
                    Switch Name
            </StyledButton>
        </div>
    )
};

export default cockpit;
