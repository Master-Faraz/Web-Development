import React, { useState } from 'react'

function Fruits() {

    let [fruit, Set_Fruit] = useState("Apple")

    return (
        <>
            <p>The value of fruit is {fruit}</p>
            <button onClick={() => Set_Fruit("Papaya")}>Papaya</button>
            <button onClick={() => Set_Fruit("Mango")}>Mango</button> 
            <button onClick={() => Set_Fruit("Banana")}>Banana</button>
            <button onClick={() => Set_Fruit("Apple")}>Apple</button>
            {/* Using Call Back Function we are calling the function */}
        </>
    )
}

export default Fruits