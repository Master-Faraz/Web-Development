import React, { useState } from 'react'

// ****************************     For User Input     *******************************************
function Input_Text() {

    let [userInput , Input_Function] = useState("")

    function Update_Text(event)
    {
        const currValue = event.target.value;
        Input_Function(currValue);
    }

  return (
    <>
    <h1>My name is {userInput}</h1>
    <input type="text" onChange={Update_Text} />
    {/* While changing the text will auto update */}
    </>
  )
}

export default Input_Text