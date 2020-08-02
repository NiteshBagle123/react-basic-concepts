import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    } 
    render(){
        console.log('[Person.js] rendering...');
        return(
            <StyledDiv>
                { this.props.isAuth ? <p>Person authenticated</p> : null }
                <p onClick={this.props.click}>My name is {this.props.name} and age {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    // ref={inputElement => { this.inputElement = inputElement }}
                    ref={ this.inputElementRef } 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </StyledDiv>
        );
    }  
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;
