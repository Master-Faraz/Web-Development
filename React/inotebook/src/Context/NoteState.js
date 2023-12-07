import { useState } from "react";
import noteContext from "./noteContext";
// import { useState } from "react";

const NoteState = (props) => {
    const notes_initial = [
        {
            "_id": "65129f10c01fcff2fa170f16",
            "user": "650cbee83e4d37eba1dfd591",
            "title": "Hello World",
            "description": "This is Hello world",
            "tag": "Personal",
            "date": "2023-09-26T09:06:24.484Z",
            "__v": 0
        },
        {
            "_id": "6512da3a4831668a97f00638",
            "user": "650cbee83e4d37eba1dfd591",
            "title": "HEHEHEHEHEHEHEHEHEHEH",
            "description": "******************************************",
            "tag": "----------------------------------",
            "date": "2023-09-26T13:18:50.869Z",
            "__v": 0
        },
        {
            "_id": "6512df856e26e2ad423cec76",
            "user": "650cbee83e4d37eba1dfd591",
            "title": "HEHEHEHEHEHEHEHEHEHEH",
            "description": "++++++++++++++++++++++++++++++++",
            "tag": "----------------------------------",
            "date": "2023-09-26T13:41:25.370Z",
            "__v": 0
        },
        {
            "_id": "651959bff8d91e85b0c447f7",
            "user": "650cbee83e4d37eba1dfd591",
            "title": "gomu gomu no red rock",
            "description": "Raid on onigashima luffy",
            "tag": "land of wano",
            "date": "2023-10-01T11:36:31.137Z",
            "__v": 0
        },
        {
            "_id": "651959c1f8d91e85b0c447f9",
            "user": "650cbee83e4d37eba1dfd591",
            "title": "gomu gomu no red rock",
            "description": "Raid on onigashima luffy",
            "tag": "land of wano",
            "date": "2023-10-01T11:36:33.979Z",
            "__v": 0
        },
        {
            "_id": "651959c2f8d91e85b0c447fb",
            "user": "650cbee83e4d37eba1dfd591",
            "title": "gomu gomu no red rock",
            "description": "Raid on onigashima luffy",
            "tag": "land of wano",
            "date": "2023-10-01T11:36:34.153Z",
            "__v": 0
        },
        {
            "_id": "651959c5f8d91e85b0c447fd",
            "user": "650cbee83e4d37eba1dfd591",
            "title": "gomu gomu no red rock",
            "description": "Raid on onigashima luffy",
            "tag": "land of wano",
            "date": "2023-10-01T11:36:37.091Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notes_initial)

    // Add a NOTE 
    const addNote = (title, description, tag) => {

        console.log("Adding a new note")
        const note = {
            "_id": "651959c5f8d91e85ffb0c447fd",
            "user": "650cbee83e4d37ebffa1dfd591",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-10-01T11:36:37.091Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    // delete a NOTE 
    const deleteNote = (id) => {
        // console.log(`Deleting note with id : ${id}`)
        // Here we are creating a new notes array which doesen't contains the note id and then we call the set note function by passing the newNotes 
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    // edit a NOTE 
    const editNote = () => {

    }

    return (
        // <noteContext.Provider value={{ state, update }}>
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;