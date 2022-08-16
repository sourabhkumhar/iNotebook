import React from 'react'

export default function Alert(props) {
    return (
        <div className='container my-3' style={{height: '50px'}}>
            <div className={`alert alert-${(props.type).toLowerCase()} alert-dismissible fade show`} role="alert">
                <strong>{props.type}:</strong> {props.msg} 
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}