import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

// FC (Funtional components)

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value); // [] retorna un array


    // Handle
    const handleAdd = (e) => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }
    const handleSubtract = (e) => {
        // setCounter(counter + 1);
        setCounter((c) => c - 1);
    }
    const handleReset = (e) => {
        // setCounter(counter + 1);
        setCounter((c) => value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;
