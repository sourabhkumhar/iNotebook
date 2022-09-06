import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "https://i-notebook-flame.vercel.app/";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all notes
    const getNotes = async () => {
        // Todo api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
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
                'auth-token': localStorage.getItem('token'),
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
                'auth-token': localStorage.getItem('token'),
            },
        });
        await response.json();

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
                'auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({ title, description, tag })
        });
        await response.json();


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