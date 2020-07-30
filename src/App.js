import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

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

class App extends Component {
  state = {
    persons: [
      { name: 'Nitesh', age: 25 },
      { name: 'Sameer', age: 24 },
      { name: 'Dipali', age: 24 }
    ]
  };

  SwitchNameHandler = () => {
    this.setState({ persons: [
      { name: 'Nitesh Bagle', age: 25 },
      { name: 'Sameer', age: 24 },
      { name: 'Dipali', age: 27 }
    ]})
  }

  nameChangeHandler = (event) => {
    this.setState({ persons: [
      { name: 'Nitesh Bagle', age: 25 },
      { name: event.target.value, age: 24 },
      { name: 'Dipali', age: 25 }
    ]})
  }

  render() {
    const styles = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm react App!</h1>
        <button 
          style={styles}
          onClick={this.SwitchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={() => this.SwitchNameHandler('Nitesh!')}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.SwitchNameHandler} 
          changed={this.nameChangeHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.SwitchNameHandler.bind(this, 'Max!')}>My hobbies: Racing</Person>
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1',null, 'Hi, I\'m react App!'));
  }
}

export default App;
