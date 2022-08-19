import React from 'react'

export default function UpdateModal(props) {
  return (
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
                                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="" placeholder='Enter Title' value={note.etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" id="edescription" name='edescription' rows="5" placeholder='Enter Description' value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' name="etag" id="etag" placeholder='Enter tag - Separate by Comma (,)' value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
  )
}
