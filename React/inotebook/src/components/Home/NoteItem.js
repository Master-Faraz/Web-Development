import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

// Importing context 
import React, { useContext } from 'react'
import noteContext from '../../Context/noteContext';

const NoteItem = (props) => {
    const { note } = props;
    //. For deleting notes we use context as we define the deleteNote in the "NoteState" context
    const context = useContext(noteContext)
    const { deleteNote } = context; //. Importing deleteNote from context

    return (
        <div className='col-md-3'>
            <div className="card my-4" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    {/* whenever the user clicks on bin icon then deleteNote function is called with id as props */}
                    <FontAwesomeIcon className='icon mx-2' icon={faTrash} style={{ color: "#3263b8", }} onClick={() => { deleteNote(note._id) }} />

                    <FontAwesomeIcon className='icon mx-2' icon={faPenToSquare} style={{ color: "#0d5de7", }} />
                </div>
            </div>
        </div>
    )
}

export default NoteItem