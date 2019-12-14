import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Hugo'
  };

  handleInput = (event) => {
    this.setState({ 
      username: event.target.value 
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} change={this.handleInput} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />

        <ol>
            <li>OK Create TWO new components: UserInput and UserOutput</li>
            <li>OK UserInput should hold an input element, UserOutput two paragraphs</li>
            <li>OK Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li>OK Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li>OK Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li>OK Add a method to manipulate the state (=> an event-handler method)</li>
            <li>OK Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li>OK Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li>OK Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>OK Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>
      </div>
    );
  }
}

export default App;
