import React, { useState } from 'react'

function CounterUpdated() {

    let [count, setCount] = useState(0);

    function increase() //. Function for increment
    {
        setCount(count + 1);
    }

    function Reset() {
        setCount(0);
    }

    function Multiply() {
        setCount(count * count)
    }
    function Decrease() {
        setCount(count - 1)
    }
    return (
        <>
            <h1>Button Clicked {count} times </h1>
            <button onClick={increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Multiply}>Power</button>

            <button onClick={() => setCount(count / 10)}>Division</button>
            {/* Here we are using arrow function for event listner */}
            
            <button onClick={Reset}>Reset</button>

        </>
    )
}

export default CounterUpdated