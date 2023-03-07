import React, { useState } from 'react'

// ****************     Our aim is to create the notes app using array and on submit it adds notes in UL
function Notes() {

    const [notes, Set_Notes] = useState([]) //.    Initial -> Empty array
    const [curr_Note, Set_Curr_Note] = useState("");

    function Update_Current_Note(event) {
        Set_Curr_Note(event.target.value)
    }

    function add_Note(event) {
        const temp_array = [...notes, curr_Note]; //. destructuring of array and adding current note --> Just like Array.push()
        // We cannot use array.push so we create temp array and push new element into it
        Set_Notes(temp_array)
    }

    return (
        <>
            <input type="text" onChange={Update_Current_Note} />
            <button onClick={add_Note}>Submit</button>
            <ul>
                {notes.map((note, index) => {
                    return <li key={index}>{note}</li>;
                }
                )
                }
            </ul>
        </>
    )
}

export default Notes