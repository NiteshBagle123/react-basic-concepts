import React, { useEffect } from 'react';
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
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // https request
      // const timer = setTimeout(()=> {
      //   alert('Save data in cloud');
      // }, 1000);
      setTimeout(()=> {
        alert('Save data in cloud');
      }, 1000);
      return(() => {
        // clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEffect');
      });
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect-2');
      return(() => {
        console.log('[Cockpit.js] cleanup work in useEffect-2');
      });
    });
    let classes = [];
    if(props.personsLength <= 2){
      classes.push('red');
    }

    if(props.personsLength <=1){
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

export default React.memo(cockpit);
