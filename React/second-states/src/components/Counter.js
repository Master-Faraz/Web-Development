import React, { useState } from 'react'

function Counter() {

    let [count, setCount] = useState(0); //. This is State
    // useState returns array containing variable and a function for action . And it maintaines State
    // This will rerender the Counter Component but we must update value of count using The SetCount function

    function UpdateCount() {
        setCount(count + 1); //.    We are calling the function not defining it
        // count++;
    }

    return (
        <>
            <p>This is the Value of count {count}</p>
            {/* Above code -> React only rerenders the paragraph not the whole JSX Fragment */}

            <button onClick={UpdateCount}>Click me</button>
            {/* onClick is event listner in react */}
        </>
    )
}

export default Counter