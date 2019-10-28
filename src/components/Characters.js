import React from 'react'
import DisplayCharacters from './DisplayCharacters'
import axios from 'axios'


class Characters extends React.Component {

    state = {
        characters: []
    };
    // this.getEmployee = this.getEmployee.bind(this);


    getCharacter = () =>{
        // Send the request
        axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
            // Extract the DATA from the received response
            .then(res => this.setState({ characters: res.data}))
            .then(res => console.log( "my state",this.state))
            // .then(res => console.log(res.data[0].quote))
        // Use this data to update the state

    };

    componentDidMount(){
        this.getCharacter()
    }

    render() {
        return (
            <div>
                {this.state.characters.map((character, i) => (< DisplayCharacters key={i} characters={character}/>)) }
                <button type="button" onClick={this.getCharacter}>Get character</button>
            </div>
        )
    }
}

export default Characters
