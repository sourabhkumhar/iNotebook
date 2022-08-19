import React, { useState, useContext } from 'react';
import noteContext from '../context/notes/noteContext'

export default function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h1 className='my-3'>Add a Note</h1>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="" placeholder='Enter Title' onChange={onChange} minLength={5} value={note.title} required />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="description" name='description' rows="5" placeholder='Enter Description' onChange={onChange} minLength={5} value={note.description} required />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' name="tag" id="tag" placeholder='Enter tag - Separate by Comma (,)' onChange={onChange} minLength={5} value={note.tag} required />
                </div>

                <button disabled={note.title.length < 3 || note.description.length < 5} onClick={handleClick} type="submit" className="btn btn-primary">Add Note</button>
            </form>
        </div>
    )
}
