import React from 'react';
import axios from 'axios'
import './App.css';
import DisplayEmployee from './components/DisplayEmployee';

const sampleEmployee = {
  const quotes = [
    {
        quote:
            "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
        character: "Homer Simpson",
        image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        element: 1
    }
  
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: sampleEmployee
    };
    this.getEmployee = this.getEmployee.bind(this);
  }

  getEmployee() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.json())
      // Use this data to update the state
      .then(data => {
        console.log(data)
        this.setState({
          employee: data.results[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayEmployee employee={this.state.employee} />
        <button type="button" onClick={this.getEmployee}>Get employee</button>
      </div>
    );
  }
}

export default App;
