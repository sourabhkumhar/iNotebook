import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-4 col-lg-3 col-xl-2 col-6 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-1" onClick={() => {
                        deleteNote(note._id)
                        props.showAlert('Your note has been deleted', 'success', 'Success');
                    }}></i>
                    <i className="fa-solid fa-pen-to-square mx-1" onClick={() => { updateNote(note) }}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem