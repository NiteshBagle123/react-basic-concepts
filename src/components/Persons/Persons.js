import React, { PureComponent } from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends PureComponent {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    // --> PureComponents check for shouldComponentUpdate checks which we made in if condition
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked){
    //         return true
    //     } else {
    //         return true;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
         console.log('[Persons.js] componentDidUpdate');
         console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }
    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => (
            <ErrorBoundary key={person.id}>
              <Person
                name={person.name} 
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}/>
            </ErrorBoundary>
        ))
    }
};

export default Persons;