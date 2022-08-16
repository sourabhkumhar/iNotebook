import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "62f268537cf65fdca6257e023f9",
            "user": "62eb8d27e67721de24a1ec39",
            "title": "My Title",
            "description": "please wake up early in morning",
            "tag": "personal",
            "date": "2022-08-09T13:59:47.870Z",
            "__v": 0
        },
        {
            "_id": "62f2685437cffdc45a627e023f9",
            "user": "62eb8d27e67721de24a1ec39",
            "title": "My Title",
            "description": "please wake up early in morning",
            "tag": "personal",
            "date": "2022-08-09T13:59:47.870Z",
            "__v": 0
        },
        {
            "_id": "62f268537545cffdca627e65023f9",
            "user": "62eb8d27e67721de24a1ec39",
            "title": "My Title",
            "description": "please wake up early in morning",
            "tag": "personal",
            "date": "2022-08-09T13:59:47.870Z",
            "__v": 0
        },
        {
            "_id": "62f268345537cffdca627e02653f9",
            "user": "62eb8d27e67721de24a1ec39",
            "title": "My Title",
            "description": "please wake up early in morning",
            "tag": "personal",
            "date": "2022-08-09T13:59:47.870Z",
            "__v": 0
        },
        {
            "_id": "62f26853735345cffdca627e56023f9",
            "user": "62eb8d27e67721de24a1ec39",
            "title": "My Title",
            "description": "please wake up early in morning",
            "tag": "personal",
            "date": "2022-08-09T13:59:47.870Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    // Add a note
    const addNote = (title, description, tag) => {
        // Todo api call
        const note = {
            "_id": "62f2685345337cffdca627e064523f9",
            "user": "62eb8d27e67721de24a1ec39",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-08-09T13:59:47.870Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a note
    const deleteNote = (id) => {
        // Todo api call
        console.log("Deleting the note with id " + id)
        const newNotes = notes.filter((note) => {return note._id !== id})
        setNotes(newNotes)

    }

    // Edit a note
    const editNote = (id, title, description, tag) => {
        
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;