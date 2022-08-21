import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    let location = useLocation();
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login")    
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-4">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/profile">Profile</Link>
                            </li>
                        </ul>
                        
                       {!localStorage.getItem('token')?<form className="d-flex">
                            <Link to="/login" className="btn btn-success rounded-1 mx-1" role="button">Login</Link>
                            <Link to="/signup" className="btn btn-success rounded-1 mx-1" role="button">Signup</Link>
                        </form>: <button onClick={handleLogout} className='btn btn-danger rounded-1'>Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
