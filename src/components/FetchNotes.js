import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function FetchNotes(props) {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    // Ref hook
    const ref = useRef(null)
    const refClose = useRef(null)

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const handleClick = (e) => {
        if (!(note.etitle.length < 3 || note.edescription.length < 5)) {
            editNote(note.id, note.etitle, note.edescription, note.etag)
            refClose.current.click();
            props.showAlert('Your not has been updated', 'success', 'Success');
        }
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag, })
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />

            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="" placeholder='Enter Title' value={note.etitle} onChange={onChange} minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" id="edescription" name='edescription' rows="5" placeholder='Enter Description' value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' name="etag" id="etag" placeholder='Enter tag - Separate by Comma (,)' value={note.etag} onChange={onChange} minLength={3} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">

                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            <button disabled={note.etitle.length < 3 || note.edescription.length < 5} type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>

                        </div>
                    </div>
                </div>
            </div>

            <h1>Your Notes:</h1>

            <div className="container">
                {notes.length === 0 && 'No Notes to Display'}
            </div>

            <div className="row" align="center">
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} note={notes} showAlert={props.showAlert} updateNote={updateNote} />
                })}
            </div>
        </>
    )
}
