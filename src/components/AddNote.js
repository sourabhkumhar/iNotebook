import React, { useState, useContext } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert('Your not has been added', 'success', 'Success');
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const myStyle = {
        outline: 'none',
        border: 'none',
        width: '100%',
        fontSize: '17px'
    }

    return (
        <div>
            <h1 className='my-3'>Add a Note</h1>
            <form>
                <div className="mb-3 border border-3 rounded-3 p-2">
                        <input type="text" className="border-0" id="title" name='title' aria-describedby="" placeholder='Title' onChange={onChange} style={myStyle} minLength={5} value={note.title} required />

                    <hr />

                    <textarea className="border-0" id="description" name='description' rows="5" placeholder='Take a note...' onChange={onChange} style={myStyle} minLength={5} value={note.description} required />

                    <hr />

                    <input type="text" className="border-0 mb-1" name="tag" id="tag" placeholder='Tag' onChange={onChange} style={myStyle} minLength={5} value={note.tag} required />
                </div>

                <button disabled={note.title.length < 3 || note.description.length < 5} onClick={handleClick} type="submit" className="btn btn-primary">Add Note</button>
            </form>
        </div>
    )
}
