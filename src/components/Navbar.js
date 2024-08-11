import React from 'react'
import { Link } from 'react-router-dom'
import { VscColorMode } from "react-icons/vsc";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/admin-profile"> <BsPersonCircle/> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sci-fi">Sci-fi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/horror">Horror</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/thriller">Thriller</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/travel">Travel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/articles">Articles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/life-experience">Life-experience</Link>
                            </li>


                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </li> */}

                            {/* <li className="nav-item dropdown ms-3">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <VscColorMode/>  Mode
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li> */}

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
