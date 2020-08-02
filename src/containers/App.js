import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilary';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { name: 'Nitesh', age: 25 },
      { name: 'Sameer', age: 24 },
      { name: 'Dipali', age: 24 }
    ],
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount')
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

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

    this.setState((prevState, props) => ({ 
      persons: persons, 
      changeCounter: prevState.changeCounter + 1 
    }));

    // this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1 });
  }

  TogglePersonHandler = () => this.setState({ showPerson:  !this.state.showPerson });

  deleteHandler = (personIndex) => {
    // do not mutate object ==> const personsList = this.state.persons.slice();
    const personList = [ ...this.state.persons ];
    personList.splice(personIndex, 1);
    this.setState({ persons: personList });
  };

  loginHandler = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated
    });
  }
  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPerson) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deleteHandler}
        changed={this.nameChangeHandler} 
        isAuthenticated = {this.state.isAuthenticated} />
    }
  
    return (
        <Aux>
          <button onClick={() => this.setState({ showCockpit: false })}>
            Remove cockpit
          </button>
          { 
            this.state.showCockpit 
              ? (<Cockpit
                  logIn={this.loginHandler}
                  title={this.props.appTitle}
                  personsLength={this.state.persons.length}
                  showPerson={this.state.showPerson} 
                  togglePerson={this.TogglePersonHandler} />
                )
              : null
          }
          { persons }
        </Aux>
    );
  }
}

export default withClass(App, 'App');
