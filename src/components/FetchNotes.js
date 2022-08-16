import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function FetchNotes() {
    const context = useContext(noteContext);
    const { notes, addNote } = context;
    return (
        <>
            <AddNote />
            <h1>Your Notes:</h1>
            <div className="row" align="center">
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} note={notes} />
                })}
            </div>
        </>
    )
}
