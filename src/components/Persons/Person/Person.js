import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';

// import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        .Person {
            width: 450px;
        }
    }
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    
    return (
        <StyledDiv>
            <p onClick={props.click}>My name is {props.name} and age {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>

        // <div className="Person" style={style}> 
        //     <p onClick={props.click}>My name is {props.name} and age {props.age}</p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.changed} value={props.name}/>
        // </div>
    );
}

export default person;
// export default Radium(person);
