import React from 'react'

export default function Alert(props) {
    return (
        <div className='container my-3' style={{height: '50px'}}>
            {props.alert && <div className={`alert alert-${(props.alert.type).toLowerCase()} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.prefix}:</strong> {props.alert.msg} 
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}