import React from 'react'
import AddNoteForm from './Home/AddNoteForm';
import Notes from './Home/Notes';

export const Home = () => {

  return (
    <div className='container'>
      <div>
        <AddNoteForm />
        <h1>Your Notes</h1>
        <Notes />
      </div>
    </div>
  )
}
