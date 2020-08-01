import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;

    if(this.state.showPerson) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deleteHandler}
        changed={this.nameChangeHandler} />
    }
  
    return (
        <div className="App">
          <Cockpit
            title={this.props.appTitle}
            persons={this.state.persons}
            showPerson={this.state.showPerson} 
            togglePerson={this.TogglePersonHandler} />
          { persons }
        </div>
    );
  }
}

export default App;
