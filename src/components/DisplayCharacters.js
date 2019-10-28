import React from 'react';



const DisplayCharacters = ({ characters }) => {
    console.log("characters", characters)
    return (
        <div className="DisplayCharacters">
            <img
                src={characters.image}
                alt={characters.character}
            />
            <div>
                {characters.character} <br/>
                {characters.quote}

            </div>
        </div>
    );
};

export default DisplayCharacters;