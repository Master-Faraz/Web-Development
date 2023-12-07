// Notes component contains the code of all the notes elements 
import React, { useContext } from 'react'
import noteContext from '../../Context/noteContext';
import NoteItem from './NoteItem';


function Notes() {
    // Here we are using context api to create a context 
    // Here we are importing the context and using it to create context then we destructure the context to extract the notes and SetNotes 
    const context = useContext(noteContext)
    const { notes } = context;
    

    return (
        <div>
            <div className="row my-3">
                {/* As notes is an array of objects so we iterate and return each note in array */}
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />;
                })}
            </div>
        </div>
    )
}

export default Notes