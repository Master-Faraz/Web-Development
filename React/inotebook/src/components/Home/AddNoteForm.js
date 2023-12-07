// This contains all the code to add notes to the database
// Here we are using form from bootstrap
import React, { useContext, useState } from 'react'
import noteContext from '../../Context/noteContext';

function AddNoteForm() {
    const context = useContext(noteContext)
    const { addNote } = context;

    const handleClick = (e) => {
        e.preventDefault();
        console.log("HAndled click");
        addNote(note.title, note.description, note.tag)
    }

    const [note, setnote] = useState({ title: "", description: "", tag: "" })
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <div className='my-3'>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title </label>
                    <input type="email" className="form-control" id="title" name="title" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNoteForm