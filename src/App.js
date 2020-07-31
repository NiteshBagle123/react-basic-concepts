import React, { Component, useState } from 'react';
import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// const App  = (props) => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Nitesh', age: 25 },
//       { name: 'Sameer', age: 24 },
//       { name: 'Dipali', age: 24 }
//     ]
//   });

//   const SwitchNameHandler = newName => setPersonsState({ 
//     persons: [
//       { name: newName, age: 25 },
//       { name: 'Sameer', age: 24 },
//       { name: 'Dipali', age: 27 }
//     ]
//   });

//   return (
//     <div className="App">
//       <h1>Hi, I'm react App!</h1>
//       <button onClick={SwitchNameHandler}>Switch Name</button>
//       <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age} />
//       <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age} />
//       <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age}
//         click={SwitchNameHandler}>
//         My hobbies: Racing
//       </Person>
//     </div>
//   );
// }

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'green'};
    color: black
  }
`;

class App extends Component {
  state = {
    persons: [
      { name: 'Nitesh', age: 25 },
      { name: 'Sameer', age: 24 },
      { name: 'Dipali', age: 24 }
    ],
    showPerson: false
  };

  SwitchNameHandler = () => {
    this.setState({ persons: [
      { id: '1', name: 'Nitesh Bagle', age: 25 },
      { id: '2', name: 'Sameer', age: 24 },
      { id: '3', name: 'Dipali', age: 27 }
    ]})
  }

  nameChangeHandler = (event, id) => {
    const personId = this.state.persons.findIndex(person => person.id === id);
    const person = { ...this.state.persons[personId] };
    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personId] = person;
    this.setState({ persons: persons })
  }

  TogglePersonHandler = () => this.setState({ showPerson:  !this.state.showPerson });

  deleteHandler = (personIndex) => {
    // do not mutate object ==> const personsList = this.state.persons.slice();
    const personList = [ ...this.state.persons ];
    personList.splice(personIndex, 1);
    this.setState({ persons: personList });
  };

  render() {
    const styles = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPerson){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => (
            <ErrorBoundary key={person.id}>
              <Person
                name={person.name} 
                age={person.age}
                click={() => this.deleteHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
            </ErrorBoundary>
            ))
          }
        </div> 
      );
      // styles.backgroundColor = 'red';
      // styles[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }
  
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm react App!</h1>
          <p className={classes.join(' ')}>This is really working!</p>
            <StyledButton alt={this.state.showPerson} onClick={this.TogglePersonHandler}>
              Switch Name
            </StyledButton>
          { persons }
        </div>
  
      // <StyleRoot>
      // <div className="App">
      //   <h1>Hi, I'm react App!</h1>
      //   <p className={classes.join(' ')}>This is really working!</p>
      //   <button 
      //     style={styles}
      //     onClick={this.TogglePersonHandler}>Switch Name</button>
      //   { persons }
      // </div>
      // </StyleRoot>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1',null, 'Hi, I\'m react App!'));
  }
}

export default App;
// export default Radium(App);
