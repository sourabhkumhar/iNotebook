import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all notes
    const getNotes = async () => {
        // Todo api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYmQyN2U1NzE0OTA5YjYzOGFlMzlkIn0sImlhdCI6MTY2MDY3MjAxMX0.85oSUq4IUMqe7OMTMrEsQcR-RJ_vidVf0FV6hC3yda0',
            }
        });
        const json = await response.json()
        setNotes(json)
    }

    // Add a note
    const addNote = async (title, description, tag) => {
        // Todo api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYmQyN2U1NzE0OTA5YjYzOGFlMzlkIn0sImlhdCI6MTY2MDY3MDYwMX0.daoKr1ye-UxSPB5EHPqEtr0nPK7pNZqCjW8LIbDdVlk',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();

        console.log(note);
        setNotes(notes.concat(note))
        
    }

    // Delete a note
    const deleteNote = async (id) => {
        // Todo api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYmQyN2U1NzE0OTA5YjYzOGFlMzlkIn0sImlhdCI6MTY2MDY3MjAxMX0.85oSUq4IUMqe7OMTMrEsQcR-RJ_vidVf0FV6hC3yda0',
            },
        });
        const json = await response.json();

        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYmQyN2U1NzE0OTA5YjYzOGFlMzlkIn0sImlhdCI6MTY2MDY3MjAxMX0.85oSUq4IUMqe7OMTMrEsQcR-RJ_vidVf0FV6hC3yda0',
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();


        let newNotes = JSON.parse(JSON.stringify(notes))
        // LOGIC TO CLIENT
        for (let index = 0; index < newNotes.length; index++) {

            if (newNotes[index]._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes)
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;