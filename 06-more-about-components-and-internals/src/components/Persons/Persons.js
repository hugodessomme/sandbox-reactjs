import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');

    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                    key={person.id}
                    click={() => this.props.clicked(index)} 
                    changed={(event) => this.props.changed(event, person.id)}
                    name={person.name} 
                    age={person.age} />
            );
        });
    }
}

export default Persons;